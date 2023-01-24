const matter = require("gray-matter");
var fs = require("fs");

module.exports = {
  getMarkdownPageContent(filePath) {
    try {
      const readFile = fs.readFileSync(filePath, "utf-8");
      const { data: frontmatter, content } = matter(readFile);

      return { content, frontmatter };
    } catch (err) {
      console.log("error");
    }
  },

  getNewsPreviews() {
    // returns the first 3 lines of the contents
    function firstFourLines(file, options) {
      file.excerpt = file.content.split("\n").slice(0, 3).join(" ");
    }

    const dirPath = "markdown/news";
    const files = fs.readdirSync(dirPath);
    const previews = files.map((file) => {
      const slug = file.replace(".md", "");
      const readFile = fs.readFileSync(`${dirPath}/${file}`, "utf-8");
      const { data: frontmatter, excerpt } = matter(readFile, {
        excerpt: firstFourLines,
      });

      return {
        excerpt,
        frontmatter,
        slug,
      };
    });

    const sortedPreviews = previews.sort((a, b) => {
      const aDate = new Date(a.frontmatter.date);
      const bDate = new Date(b.frontmatter.date);
      return bDate - aDate;
    });

    return { previews: sortedPreviews };
  },

  getSideNav(dirPath) {
    const files = fs.readdirSync(dirPath);
    const sideNav = files.map((file) => {
      const slug = file.replace(".md", "");
      const readFile = fs.readFileSync(`${dirPath}/${file}`, "utf-8");
      const { data } = matter(readFile);

      return {
        date: data.date,
        slug,
        title: data.title,
      };
    });

    const sortedSideNav = sideNav.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return bDate - aDate;
    });

    /**
     * Limit Side navigation news items to 15 count
     */
    return { sideNav: sortedSideNav.slice(0, 15) };
  },

  getPaths(dirPath) {
    const files = fs.readdirSync(dirPath);
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    }));

    return paths;
  },
};
