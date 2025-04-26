export async function* getGithubRepository(query, signal) {
  if (!query) return;
  let page = 1;
  console.log("calling..");
  while (true) {
    const data = await fetch(
      `https://api.github.com/search/repositories?q=${query}&page=${page}`,
      { signal }
    );

    const res = await data.json();

    if (!res?.items?.length) break;

    yield res.items;

    page++;
  }
}
