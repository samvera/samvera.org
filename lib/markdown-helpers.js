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
    const dirPath = "markdown/news";
    const files = fs.readdirSync(dirPath);
    const previews = files.map((file) => {
      const slug = file.replace(".md", "");
      const readFile = fs.readFileSync(`${dirPath}/${file}`, "utf-8");
      const { data: frontmatter, content } = matter(readFile);

      return {
        content,
        frontmatter,
      };
    });

    return { previews };
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
