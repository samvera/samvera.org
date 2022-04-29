---
title: "Active Fedora 9.1.0 released"
date: "2015-04-20"
categories: 
  - "news"
  - "software-updates"
---

We’re pleased to announce the release of ActiveFedora 9.1.0 and 9.1.1.  9.1.0 has a number of new features and 9.1.1 was released when we found a small bug just after the release of 9.1.0.

New features:

The has\_attributes() method was deprecated and replaced with property(). The property() method previously was used to declare only RDF properties, but now you can use it to declare properties that are delegated to an XML file too. Here’s an example:

class Book < ActiveFedora::Base contains ‘descMetadata’, class\_name: ‘CodexMetadata’ property :title, delegate\_to: ‘descMetadata’, multiple: false end

Additionally you can declare your indexing hints right in the model on the property, just like you would do for a RDF property:

property :title, delegate\_to: ‘descMetadata’, multiple: false do |index| [index.as](http://index.as/) :stored\_searchable end

This release also contains many bug fixes including:

- has\_and\_belongs\_to\_many associations finding inverse relationships
- Finding the best model to instantiate when it is inherited
- preventing models from loading into the wrong class
- sorting of versions by date (rather than string)
- many more!

See the full list here:

[https://github.com/projecthydra/active\_fedora/releases/tag/v9.1.0](https://github.com/projecthydra/active_fedora/releases/tag/v9.1.0) Thanks, as ever, to those involved!
