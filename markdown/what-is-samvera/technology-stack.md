---
title: "Technology stack"
date: "2016-10-07"
---

A Samvera repository solution provides functionality for the full range of CRUD services (create, read, update, delete).  To do this it employs a number of Ruby on Rails based components (or "gems") in conjunction with three other "best of breed" open source software products: Fedora, Solr and Blacklight.

![Samvera technology stack diagram](images/Samvera-Components-Diagram.png)

 

At the top of our architecture diagram is "Samvera Applications." Broadly, these are [Ruby on Rails](http://rubyonrails.org/) based applications that follow Samvera conventions. We are focusing our development efforts here on [Hyrax](http://hyr.ax/about/) as a Samvera application. These Samvera applications generally use a number of plugins to provide specific, additional functionality.

As noted above, most new Community development efforts at the Samvera Application level are happening in a project called Hyrax, an application code base that the Community will jointly support and maintain. If you are starting a new Samvera project, we strongly recommend you start with [Hyrax](http://hyr.ax/about/) for this part of your architecture.  (Hyku, Hydra's turnkey solution bundle, is built using Hyrax.) While it is possible to create your own Samvera application by assembling the right components, and this has been a common practice in the Samvera Community in the past, ongoing maintenance of home-grown solutions will be more expensive than sharing maintenance costs with the rest of the Community.

At the bottom of the diagram are Fedora and Solr. We use [Fedora 4](http://fedorarepository.org/) as our persistence layer. This is where the actual content and its associated metadata (or pointers to them) are stored. Interaction with Fedora happens via an HTTP API. Fedora 4 stores content as linked data. We use [Apache Solr](http://lucene.apache.org/solr/) as the basis for our search functionality. Content from Fedora is indexed into Solr via [ActiveFedora](https://github.com/projecthydra/active_fedora), one of our middleware gems. Interaction with Solr also happens via an HTTP API.

In the centre of our architecture diagram is a range of "middleware" components.

_hydra-head_: [Hydra-Head](https://github.com/projecthydra/hydra-head) is a Ruby-on-Rails gem containing the core code for a web application using the full stack of Samvera building blocks.

[](https://github.com/projecthydra/projecthydra.github.io/blob/refactor_docs/pages/hydra/1_new_start_here/our_technology_stack.md#active_fedora)_active\_fedora_: Ruby on Rails usually follows the [Active Record](http://guides.rubyonrails.org/active_record_basics.html) pattern to persist objects to a database. We instead use [ActiveFedora](https://github.com/projecthydra/active_fedora) to persist objects to Fedora.

[](https://github.com/projecthydra/projecthydra.github.io/blob/refactor_docs/pages/hydra/1_new_start_here/our_technology_stack.md#ldp)_ldp_: We use a ruby gem called [ldp](https://github.com/projecthydra/ldp) to implement the LDP ([Linked Data Platform](http://www.dataversity.net/introduction-linked-data-platform/)) interaction patterns for interaction with Fedora 4.

[](https://github.com/projecthydra/projecthydra.github.io/blob/refactor_docs/pages/hydra/1_new_start_here/our_technology_stack.md#rsolr)_rsolr_: [Rsolr](https://github.com/rsolr/rsolr) is a ruby client for Solr.

[](https://github.com/projecthydra/projecthydra.github.io/blob/refactor_docs/pages/hydra/1_new_start_here/our_technology_stack.md#blacklight)_blacklight_: Much of our search and display behavior is inherited from [Blacklight](http://projectblacklight.org/). Many Samvera institutions also run Blacklight applications separately from Samvera itself, to provide search and discovery for their collections. The Blacklight Project also has many of its own plugins, such as [Spotlight](http://spotlight.projectblacklight.org/) for building virtual exhibits, and [GeoBlacklight](http://geoblacklight.org/) which enhances Blacklight for use with geospatial data.
