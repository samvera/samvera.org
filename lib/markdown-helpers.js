import matter from "gray-matter";

export function getMarkdownPageContent(fileName) {
  try {
    const { data: frontmatter, content } = matter(fileName);

    return { content, frontmatter };
  } catch (err) {
    console.log("error");
  }
}

export function getSideNav(dirPath) {
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
}

export function getPaths(files) {
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return paths;
}
