---
title: "Active Fedora 6.7.4 released"
date: "2014-01-16"
categories: 
  - "news"
  - "software-updates"
---

\*\*\*  See edit below \*\*\*

Earlier this week Greg Kellogg released a new version of the Ruby RDF library (1.1.2),  this breaks the rdf-rdfxml (1.0.1) library which Active Fedora depends on.

The updated Active Fedora gem contains a dependency that ensures we get a working combination of those libraries.  This is the sole change in this release.

If you are not upgrading to 6.7.4 it is highly recommended that you add this line to your Gemfile:

gem ‘rdf’, ‘~> 1.1.1.1’

Thanks to Justin Coyne of DCE for the alert and the fix.

\*\*\*Edit\*\*\*

Mr. Kellog has yanked the rdf 1.1.2 gem and released a fixed version (1.1.2.1), so this is no longer an issue.
