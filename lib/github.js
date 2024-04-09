export async function getGithubRepoData(featuredApps) {
  const apiRootUrl = "https://api.github.com/repos/";

  // Set up the URLs we need to fetch
  const urls = featuredApps.map((app) => `${apiRootUrl}${app.githubHandle}`);
  const releaseUrls = featuredApps.map(
    (app) => `${apiRootUrl}${app.githubHandle}/releases/latest`
  );

  try {
    // Fetch the data
    const repoDataResponses = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "samvera/samvera.org",
          },
        }).then((res) => res.json())
      )
    );

    const releaseResponses = await Promise.all(
      releaseUrls.map((url) => fetch(url).then((res) => res.json()))
    );

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
