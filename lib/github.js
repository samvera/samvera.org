// Create a cache to store the data we fetch from GitHub
// Github API has a rate limit of 60 requests per hour for unauthenticated users, so when developing locally, we can cache the data to avoid hitting the rate limit.
let cache = {};

async function fetchData(url) {
  if (cache[url]) {
    console.log("cached", cache[url]);
    return cache[url];
  }

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      // "User-Agent": "samvera/samvera.org",
    },
  });
  const data = await res.json();
  cache[url] = data;
  return data;
}

export async function getGithubRepoData(featuredApps) {
  const apiRootUrl = "https://api.github.com/repos/";

  // URLs of the GitHub repo
  const urls = featuredApps.map((app) => `${apiRootUrl}${app.githubHandle}`);

  // URLs of the latest release
  const releaseUrls = featuredApps.map(
    (app) => `${apiRootUrl}${app.githubHandle}/releases/latest`
  );

  try {
    // Fetch the data
    const repoDataResponses = await Promise.all(urls.map(fetchData));

    const releaseResponses = await Promise.all(releaseUrls.map(fetchData));

    // Update the featuredApps with the data we fetched
    const updateFeaturedApps = featuredApps.map((featuredApp, index) => {
      const repoData = repoDataResponses[index];
      const releaseData = releaseResponses[index];

      return {
        ...featuredApp,
        githubUrl: repoData.html_url,
        version: releaseData.tag_name,
        ...(!featuredApps.url ? { ...{ url: repoData.homepage } } : {}),
      };
    });

    return updateFeaturedApps;
  } catch (error) {
    console.error("Error fetching data from GitHub", error);
    return featuredApps;
  }
}
