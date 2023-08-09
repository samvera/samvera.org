---
title: "Technology stack"
date: "2016-10-07"
---
Samvera is not one single software product; it is a collection of components built and supported by the Samvera Community to create a repository solution. In addition, Samvera draws on many more open source components that are maintained by other open source communities.

A Samvera repository solution provides functionality for the full range of CRUD services (create, read, update, delete).  To do this it employs a number of [Ruby on Rails](https://rubyonrails.org/) based components (or "gems") in conjunction with other open source software products.

![Samvera technology stack diagram](../images/technology-stack.png)

At the top of the stack are three options for repository application solutions that have been bundled in such a way to deliver functionality for a specific set of use cases:

* **[Avalon Media System](https://www.avalonmediasystem.org/)** is a platform for managing and providing access to large collections of digital audio and video, and is built on Samvera core components. 

* **[Hyrax](https://hyrax.samvera.org/)** is a fully featured repository front end with self-deposit and administrative workflow features. One benefit of starting your application with Hyrax instead of starting your application with just Ruby on Rails is that Hyrax has a rich and growing set of features built in that are especially useful for repository owners, such as the ability to create and edit user profiles, configure workflows, generate work types and work type images, upload multiple files and folders, set user level control over metadata and more. 

* **[Hyku](https://hyku.samvera.org/)** offers multi-tenancy. It’s built on top of Hyrax so it comes with all of the features of Hyrax, but being multi-tenant means that there’s a single repository owner that can create multiple Hyrax instances for that repository. In addition, Hyku adds IIIF Image & Presentation API support, the Universal Viewer, and bulk import scripts as well as greater customization options like adding fonts and custom CSS. Hyku as a hosted service is offered by service providers.

Other open source software used in the stack include **[Blacklight](https://projectblacklight.org/)** to display search results; **[Spotlight](https://github.com/projectblacklight/spotlight)** for attractive collection display; and the **[IIIF Universal Viewer](https://universalviewer.io/)**, a high quality item viewer.

A set of core components (Ruby gems) provide interfaces interacting with [Fedora](https://fedora.lyrasis.org/) and [Solr](https://solr.apache.org/), [PCDM-compliant data models](https://pcdm.org/models) and other commonly-needed features like characterization, text extraction and derivative generation. Samvera also has core components that can be used by institutions who want to create fully custom front ends for their repositories while still benefiting from community supported components for some common repository processes. 

The base of this stack of components is the data store layer. A data store is a repository for continuously storing and managing collections of data. It is used as the persistence layer and is where the actual content and its associated metadata are stored. **[Fedora](https://fedora.lyrasis.org/)** is a popular option as a persistence layer in Samvera Community repositories.

**[Solr](https://solr.apache.org/)** is an indexed based data store, used to power the search functionality of our Samvera applications. It’s quick because it allows for indexing records by ID as well as by other metadata, like ‘author’, which means a record can be linked to multiple pointers and referenced in many different ways. It answers the question: What items have metadata that match? And returns the ids to look up the actual data in a database.

**[Valkyrie](https://github.com/samvera/valkyrie)** is a data mapper that is used with data stores. It’s a gem for enabling multiple backends for the storage of files and metadata in Samvera. Valkyrie can talk to various versions of Fedora and other storage engines as well.

For a deep dive into Samvera development, see the [Developers section of the Samvera Community wiki](https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211345/Developers).
