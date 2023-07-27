---
title: "Hydra-head 6.5.0 released"
date: "2014-02-19"
categories: 
  - "news"
  - "software-updates"
---

Version 6.5.0 of the hydra-head gem has been released!  This version upgrades Blacklight to version 4.7 and ActiveFedora to version 6.7.  Among other things, these upgrades provide deprecation warnings for Blacklight 5.0 and ActiveFedora 7.0, which will be required by hydra-head version 7.0.

Changes since hydra-head 6.4.1:

\* Blacklight upgraded to version ~> 4.7 and resolved hydra-head 7.0 deprecation warnings \* Removed GenericContent test model \* Added Hydra::AccessControls::Permission#to\_hash for better compatibility with hash-based permissions \* Added unit test module for Hydra::AccessControls::Permission \* Hydra::Admin policy updated to use has\_attributes instead of deprecated delegate/delegate\_to \* Require ActiveFedora ~> 6.7 in hydra-access-controls for #has\_attributes

Thanks to David Chandek-Stark for the work.

The current versions of all Hydra gems can be accessed through [https://wiki.duraspace.org/display/hydra/Gems+and+documentation](http://wiki.duraspace.org/display/hydra/Gems+and+documentation)
