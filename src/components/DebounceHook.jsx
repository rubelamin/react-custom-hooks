import { useEffect, useRef, useState } from "react";

import useDebounce from "../hooks/useDebounce";
import { getGithubRepository } from "../utils/query";

function DebounceHook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef();
  const observerRef = useRef();
  const iteratorRef = useRef();
  const loadingRef = useRef();

  const debounceQuery = useDebounce(searchTerm, 400);

  const loadNext = async () => {
    if (!iteratorRef.current) return;

    const { value, done } = await iteratorRef.current.next();

    if (done || !value?.length) return;
    console.log(value);

    setRepos((prev) => [...prev, ...value]);
  };

  useEffect(() => {
    if (!debounceQuery) return;

    setLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    iteratorRef.current = getGithubRepository(debounceQuery, controller.signal);

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadNext();
      }
    });

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      controller.abort();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [debounceQuery]);

  return (
    <div>
      <h1>Github repository list</h1>
      <div className="card">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search github repository.."
          className="bg-amber-50 p-1 rounded-md"
        />
      </div>

      {loading && <p className="text-green-700 font-bold">Loading...</p>}
      <ul className="m-0 p-0">
        {repos &&
          repos.map((repo) => (
            <li
              key={repo.id + repo.full_name}
              className="mb-2 bg-slate-400 px-3 py-1"
            >
              <a href={repo.html_url}>{repo.full_name}</a>
            </li>
          ))}
      </ul>
      <div ref={loadingRef}></div>
    </div>
  );
}

export default DebounceHook;
