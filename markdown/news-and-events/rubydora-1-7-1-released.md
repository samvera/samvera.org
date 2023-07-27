---
title: "Rubydora 1.7.1 released"
date: "2014-02-04"
categories: 
  - "news"
  - "software-updates"
---

We are pleased to announce the release of an updated gem – Rubydora 1.7.1.

Changes since Rubydora 1.7.0:

Rubydora::RestApiClient

- Refactored file content type discernment from add\_datastream and modify\_datastream into private method.
- Added better support for Rails uploaded files by calling :content\_type on file if available.
- Added constant for default content type.
- Removed Ruby 1.8.7 workaround.
- Added tests!
- Fixes #61.

Rubydora::Datastream#has\_content? returns true if controlGroup is ‘M’ and dsLocation is present.

Added Rubydora::Datastream#empty?

Updating jettywrapper to >= 1.4.0.  Closes #55

Batch fetching profiles in Fedora 3.6+

Thanks to David Chandek-Stark, Jeremy Friesen and Benjamin Armintor for the work on it.

The current versions of all Hydra gems can be accessed through [https://wiki.duraspace.org/display/hydra/Gems+and+documentation](http://wiki.duraspace.org/display/hydra/Gems+and+documentation)
