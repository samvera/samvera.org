# Samvera Community Website

This is a NextJS framework application which creates a static website powered by Markdown documents.

## How do I use this?

## Content managers

If you are adding or updating content on the Samvera.org website, you'll only need to work with files in the `/markdown` folder.

### /markdown

This folder's content resembles the shape of the website's information architecture. Sub folders (like `/about`, `/what-is-samvera`, etc) match the primary navigation links.

[ screen shot here ]

Within each subfolder you'll find markdown files, which contain page content.

To add a new page to the website, locate the folder (main nav link), where you want the new page to live, and create a new markdown file titled something which follows suit on sibling files. Ie. `/about/my-new-page.md`.

### Front Matter

All site markdown files use the [Front Matter](https://www.npmjs.com/package/gray-matter) convention for providing some helpful metadata on our markdown files. So if we look at an existing file as an example...

`/markdown/about/faq.md`

We'll see at the top of the file:

```
---
title: "FAQ"
date: "2016-12-05"
---

[**What is Samvera?**](#01)

...rest of the markdown content goes here
```

Adjust these to taste.

### How does the site update itself?

(For now), site updates will follow a [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). The easiest way is to update directly in the Github repository UI.

Say we want to update the FAQ page. Navigate to the file location `markdown/about/faq.md`, and click the "edit" icon

[ screen shot here ]

Make whatever updates you want, and when finished we'll commit the changes. Best practice is to create a new branch (from the `main` branch) and create a PR (Pull request).

[ screen shot here ]

Once a pull request is opened, a reviewer will review. When approved, merge your branch back into `main`. All commits to the `main` branch (our production branch), will trigger a new build of the website. Github Actions will also automatically deploy a public version of the website to: https://samvera-labs.github.io/samvera.org/

### Updating Samvera Partners

There are some pieces of site information not easily updated via markdown files. Samvera Partners for one. Do make updates to the list of Samvera Partners, open the file `/app-config.js` and you'll see a list of Samvera Partners and associated info.

## Developers

This is a [NextJS application](https://nextjs.org/) and follows normal NextJS conventions. To do some work on the site and run the app locally, clone this repository and run the following:

```
npm install
npm run dev
```

## Top level app overview

`/app-config.js`
This is a top level configuration file for the app. Common items are listed here and the app will wire the data into appropriate places in the UI. It currently contains:

- Samvera Partners list

`/components`
This is where React components live, which construct the building blocks of the UI.

`/markdown`
See above

`/pages`
This directory is a NextJS convention which will autogenerate app routes. These folders should mirror the directory structure of `/markdown`, and that's how content and routes will be dynamically created as part of the static site build.

Within each child directory (ie. `pages/about`), is a file called `[slug].jsx`. This is a React component wired up to display dynamic content pulled in from the Markdown files mentioned above. In each `[slug].jsx` file, you'll make it unique by updating a `CONFIG` variable defined in the component. For example in the "About" folder:

```
const CONFIG = {
  parentDir: "about",
  parentDirLabel: "About Samvera",
};
```

### Build site navigation

Site navigation and linking can be automated using the following script. Essentially it reads the contents of the project's `/markdown` directory to know about News items, and pages tucked under "parent" pages for primary site navigation.

The command below executes a NodeJS script which will read the `/markdown` directory in the project, and dynamically create a site navigation file, `/site-navigation.js`. This navigation file is used by the application to create Primary Navigation.

Site navigation generation is automated in our Github Actions workflow. You can run the script locally however if you're working on the site and want to manually re-build navigation.

```
npm run build-site-nav
```

## Branding guidelines

...coming soon
