# Samvera Community Website

This is a NextJS framework application which creates a static
website powered by Markdown files for primary site content

## Top level app overview

`/components`
This is where React components live, which construct the building blocks of the UI.

`/markdown`
All primary page content is stored in Markdown files in this directory. These directories represent the organization of site content. Currently the site has main navigation links for:

- About Samvera
- What is Samvera?
- Why Use Samvera?
  ....etc.

...so there will be organized folders like:

```
/markdown/about
/markdown/what-is-samvera
/markdown/why-use-samvera
...
```

and the `.md` files are contained within the folders:

```
/markdown/about/samvera-community-sourced-software.md
/markdown/about/faq.md
/markdown/about/governance.md

```

`/pages`
This directory is a NextJS convention which will autogenerate app routes. These folders should mirror the directory structure of `/markdown`, and that's how content and routes will be dynamically created as part of the static site build.

Within each child directory (ie. `pages/about`), is a file called `[slug].jsx`. This is a React component wired up to display dynamic content pulled in from the Markdown files mentioned above. In each `[slug].jsx` file, you'll make it unique by updating a `CONFIG` variable defined in the component. For example in the "About" folder:

```
const CONFIG = {
  parentDir: "about",
  parentDirLabel: "About Samvera",
};
```

## Branding guidelines

...coming soon
