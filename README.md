# Samvera Community Website

This is a [NextJS framework](https://nextjs.org/) application which creates a static website powered by local [markdown](https://www.markdownguide.org/getting-started/) files and [Contentful CMS](https://www.contentful.com/).

How do I use this app / code repository / website?

## Content managers

Adding or updating content to the Samvera.org website happens in one of two ways:

1. At [Contentful CMS](https://www.contentful.com/)
2. Update local project files in the `/markdown` folder

### Contentful CMS

The preferred method of updating site content is through the [Contentful](https://www.contentful.com/) headless CMS (Content Management System). This is a web-based interface that allows you to edit content in a more user-friendly way than editing markdown files. The CMS is currently used to provide data for the following pages/info on the site:

- Blog posts (https://samvera.org/news-and-events)
- Samvera Partners (https://samvera.org/)
- Examples and Demos (https://samvera.org/repository-solutions/examples-and-demos)
- User Profiles (https://samvera.org/the-community/user-profiles)
- Service Providers (https://samvera.org/the-community/service-providers)
- FAQ (https://samvera.org/the-community/faq)
- Samvera Adopters (https://samvera.org/the-community/samvera-adopters)

#### Blog Post updates

Blog Posts (ie. News and Events) updated via Contentful are used to create dynamic individual pages at build time, since samvera.org is a static site (no server interaction). After creating or updating Blog Post content, you must manually trigger a re-deploy of the samvera.org site.

1. Go to the Github Actions tab in the `samvera.org` repository.
2. Click on "Deploy to GitHub Pages" in the left-hand column, under "Actions" / "All workflows".
3. Click on "Run workflow" in the upper right-hand corner (see screenshot below):

![image](https://github.com/samvera/samvera.org/assets/3020266/056d1558-216c-4bdd-aa43-adda71a9e6ac)

### Markdown

This project's `/markdown` folder content reflects the shape of the website's information architecture. Sub folders (like `/get-started`, `/the-community`, etc) match the primary navigation links.

![image](https://user-images.githubusercontent.com/3020266/186482460-51e7e89f-2ca5-4824-ba0a-22d41144a6ae.png)

Within each subfolder you'll find markdown files, which contain page content.

To add a new page to the website, locate the folder (main nav link), where you want the new page to live, and create a new markdown file titled something which follows suit on sibling files. Ie. `/get-started/my-new-page.md`.

#### Front Matter

All site markdown files use the [Front Matter](https://www.npmjs.com/package/gray-matter) convention for providing some helpful metadata on our markdown files. So if we look at an existing file as an example...

`/markdown/get-started/faq.md`

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

#### Committing your updates

(For now), site updates will follow a [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Best practice is to create a new branch (from the `main` branch), make your edits, and create a PR (Pull request). Assign a member of the Samvera Community to review your PR. Once approved, merge your branch back into `main`. All commits to the `main` branch (our production branch), will trigger a new build of the website. Github Actions will also automatically deploy a public version of the website to: https://samvera-labs.github.io/samvera.org/.

### Non-markdown driven pages

_Note this content is currently in transition to Contentful CMS._

#### The Community / Community Leadership

To update this file, open the `components/the-community/CommunityLeadership.jsx` component and update the data directly.

#### The Community / FAQ

To update this file, open the `components/the-community/Faq.jsx` component and update the HTML/JSX directly.

## Developers

This is a [NextJS application](https://nextjs.org/) and follows normal NextJS conventions. To run the app locally, clone this repository, open your terminal, and run the following commands:

```bash
# PNPM (NPM alternative => https://pnpm.io/)
pnpm install
pnpm dev

# Or standard NPM
npm install
npm run dev
```

### CMS local dev setup

If you're interested in running the app locally as a developer and working on pages which interact with Contentful CMS, you'll need to create a `.env.local` file in the project root. This file is ignored by git, so you'll need to create it yourself. The file should contain the following:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=gmxjheo1ix1o
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=[TOKEN_GOES_HERE]

Email adam.arling@northwestern.edu or Heather Greer Klein <heather@samvera.org> for access to the token
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

Within each child directory (ie. `pages/get-started`), is a file called `[slug].jsx`. This is a React component wired up to display dynamic content pulled in from the Markdown files mentioned above. In each `[slug].jsx` file, you'll make it unique by updating a `CONFIG` variable defined in the component. For example in the "About" folder:

```
const CONFIG = {
  parentDir: "get-started",
  parentDirLabel: "Get Started",
};
```

## Building a static version of the site

In Github, Github Actions will run a static build of the site on every merge into the `/main` code branch.

### Local building

If you're curious to see how the static site will build, run the following commands.

```bash
# See more info below
npm run build-site-nav

# Build a static version of the site to an /out directory
npm run build

# Assuming you are currently in the project root. Find your way to the /out directory
cd out

# Start a local web server
npx serve
```

`serve` should output a url for you. Follow the link and you'll be able to see the static build.

### Build site navigation

Site navigation and linking can be automated using the following script. Essentially it reads the contents of the project's `/markdown` directory to know about News items, and pages tucked under "parent" pages for primary site navigation.

The command below executes a NodeJS script which will read the `/markdown` directory in the project, and dynamically create a site navigation file, `/site-navigation.js`. This navigation file is used by the application to create Primary Navigation.

Site navigation generation is automated in our Github Actions workflow. You can run the script locally however if you're working on the site and want to manually re-build navigation.

```
npm run build-site-nav
```
