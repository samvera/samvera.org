var fs = require("fs");
const matter = require("gray-matter");

const fileToWrite = "site-navigation.js";

const softwareSolutionsNavigation = [
  {
    label: "Avalon Media System",
    href: "https://www.avalonmediasystem.org/",
    isExternal: true,
    slug: "",
  },
  {
    label: "Hyku",
    href: "https://hyku.samvera.org/",
    isExternal: true,
    slug: "",
  },
  {
    label: "Hyrax",
    href: "https://hyrax.samvera.org/",
    isExternal: true,
    slug: "",
  },
  {
    label: "Samvera Community Github",
    href: "https://github.com/samvera",
    isExternal: true,
    slug: "",
  },
  {
    label: "Samvera Labs",
    href: "https://github.com/samvera-labs",
    isExternal: true,
    slug: "",
  },
];

function getNavMap() {
  const navMap = [];

  /**
   * Delete the file first (if it exists)
   */
  try {
    if (fs.existsSync(fileToWrite)) {
      fs.unlinkSync(fileToWrite);
    }
  } catch (err) {
    console.error(err);
  }

  /**
   * Read the /markdown directory and construct a site navigation map
   * and output it to a file: /site-navigation.js which the app can use
   */
  const directories = fs.readdirSync("markdown");
  directories.forEach((directory) => {
    /**
     * Exclude creating navigation for Home, Contact and News
     */
    if (!["home", "contact-us", "news-and-events"].includes(directory)) {
      const files = fs.readdirSync(`markdown/${directory}`);

      // If there is only one file and it is index.md, then there are no children
      // pages to create navigation for
      const hasNoChildren = files.length === 1 && files[0] === "index.md";

      const navItems = files.map((fileName) => {
        const slug = fileName.replace(".md", "");

        // Read the frontmatter from the .md file here and grab "title" to use as the label
        const readFile = fs.readFileSync(
          `markdown/${directory}/${fileName}`,
          "utf-8"
        );
        const { data: frontmatter } = matter(readFile);
        const label = frontmatter.title;

        return { href: `/${directory}/${slug}`, label, slug };
      });

      // Add on Software Solutions nav items to 'repository-solutions' nav item
      if (directory === "repository-solutions") {
        navItems.push(...softwareSolutionsNavigation);
      }

      navMap.push({
        label: directory.replaceAll("-", " "),
        items: hasNoChildren ? [] : navItems,
        slug: directory,
      });
    }
  });

  return navMap;
}

const navMap = getNavMap("markdown");
const content = `
export const siteNavigation=${JSON.stringify(navMap)};
`;

try {
  fs.writeFileSync(fileToWrite, content);
} catch (err) {
  console.error(err);
}
