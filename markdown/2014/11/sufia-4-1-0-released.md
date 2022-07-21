---
title: "Sufia 4.1.0 released"
date: "2014-11-04"
categories: 
  - "news"
  - "software-updates"
---

We are pleased to announce the release of version 4.1.0 of Hydra’s Sufia gem.

This release of Sufia includes functionality to support proxy deposits and transfers of ownership.

To upgrade from 4.0.x to 4.1.0, pin Sufia to version 4.1.0 in your Gemfile, then update your dependencies, generate the new database migrations required for proxies and transfers, and then apply those migrations to your database:

-      bundle update sufia
-      rails generate sufia:models:proxies
-      rake db:migrate

Changes: [https://github.com/projecthydra/sufia/compare/v4.0.1…v4.1.0](https://github.com/projecthydra/sufia/compare/v4.0.1...v4.1.0)

Thanks to Carolyn Cole, Justin Coyne, and Mike Giarlo for the work on this release.
