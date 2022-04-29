---
title: "Sufia 6.3.0 released"
date: "2015-08-13"
categories: 
  - "news"
  - "software-updates"
---

We are pleased to announce a new gem release.

The 6.3.0 version of Sufia includes a new widget in the administrative statistics page allowing users to display the number of deposits for a date range that they select \[1\] and adds a content block to the homepage where administrative users may post site-wide announcements (such as for system downtime or new features) \[2\]. It pulls in the latest version of ActiveFedora::Noid which handles minting and validation of short, opaque identifiers for Fedora objects \[3\]. It also contains the following highlighted fixes and enhancements:

\* Numerous UI improvements related to layout, accessibility, and mobile displays \[4\]\[5\]\[6\]\[7\]\[8\]\[9\]

\* Single-use links should work when Turbolinks is on \[10\]

\* Unregistered users should have the ability to see file citations \[11\]

\* Remove hard-coded headers from About page \[12\]

\* Allow downstream users to extend and override the administrative statistics module \[13\]

See the release notes \[14\] for the upgrade process (NOTE: requires running a new rake task!) and for an exhaustive list of the work that has gone into this release. Thanks to the 12 contributors for this release, which comprised 51 commits touching 342 files: Carolyn Cole, Drew Myers, Trey Terrell, Michael Tribone, Lynette Rayle, Dan Kerchner, Justin Coyne, Colin Gross, Hector Correa, Adam Wead, and Olli Lyytinen.

\[1\] [https://github.com/projecthydra/sufia/pulls/1188](https://github.com/projecthydra/sufia/pulls/1188)

\[2\] [https://github.com/projecthydra/sufia/pulls/1239](https://github.com/projecthydra/sufia/pulls/1239)

\[3\] [https://github.com/projecthydra/sufia/pulls/1037](https://github.com/projecthydra/sufia/pulls/1037)

\[4\] [https://github.com/projecthydra/sufia/pulls/1243](https://github.com/projecthydra/sufia/pulls/1243)

\[5\] [https://github.com/projecthydra/sufia/pulls/1248](https://github.com/projecthydra/sufia/pulls/1248)

\[6\] [https://github.com/projecthydra/sufia/pulls/1249](https://github.com/projecthydra/sufia/pulls/1249)

\[7\] [https://github.com/projecthydra/sufia/pulls/1270](https://github.com/projecthydra/sufia/pulls/1270)

\[8\] [https://github.com/projecthydra/sufia/pulls/1271](https://github.com/projecthydra/sufia/pulls/1271)

\[9\] [https://github.com/projecthydra/sufia/pulls/1273](https://github.com/projecthydra/sufia/pulls/1273)

\[10\] [https://github.com/projecthydra/sufia/pulls/1278](https://github.com/projecthydra/sufia/pulls/1278)

\[11\] [https://github.com/projecthydra/sufia/pulls/1266](https://github.com/projecthydra/sufia/pulls/1266)

\[12\] [https://github.com/projecthydra/sufia/pulls/1239](https://github.com/projecthydra/sufia/pulls/1239)

\[13\] [https://github.com/projecthydra/sufia/pulls/1245](https://github.com/projecthydra/sufia/pulls/1245)

\[14\] [https://github.com/projecthydra/sufia/releases/tag/v6.3.0](https://github.com/projecthydra/sufia/releases/tag/v6.3.0)
