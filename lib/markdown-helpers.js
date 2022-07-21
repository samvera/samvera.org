const matter = require("gray-matter");
var fs = require("fs");

module.exports = {
  getMarkdownPageContent(filePath) {
    console.log("filePath", filePath);
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
        slug,
        title: data.title,
      };
    });

    return { sideNav };
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
