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
    const repoDataResponses = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            // "User-Agent": "samvera/samvera.org",
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
          },
        }).then((res) => {
          return res.json();
        })
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
