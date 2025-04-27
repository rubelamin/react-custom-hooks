import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function LocalStorage() {
  const [show, setShow] = useLocalStorage("show", false);
  return (
    <div>
      <h2>useLocalStorage hook</h2>
      <p>Current Value: {show ? "True" : "False"}</p>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="bg-blue-600 text-amber-50 px-3 py-1 rounded-md"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default LocalStorage;
