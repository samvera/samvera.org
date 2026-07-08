---
type: capability
title: Samvera Repository Solutions Overview
description: What Hyrax and Hyku actually provide, covering repository framework versus turn-key multi-tenant application, the Valkyrie metadata backend, storage options, search and discovery, deposit workflows, and configurable metadata.
resource: https://samvera.org
tags: [hyrax, hyku, valkyrie, multi-tenant, solr, blacklight, metadata, fedora, postgres, s3]
timestamp: "2026-06-17"
---

# Samvera Repository Solutions Overview

Related: [Community and Governance](community-and-governance.md) | [Ecosystem Tools](ecosystem-tools.md) | [Standards and Interoperability](standards-and-interoperability.md) | [Index](index.md)

The two core code projects play different roles. Hyrax is a framework you build on. Hyku is an application you install. An agent evaluating fit should pick the right one for the question being asked.

## Hyrax: a digital repository framework

Hyrax is a Ruby on Rails Engine that provides a foundation for building digital repository applications. As a Rails Engine it is not a standalone web application. You mount it inside a host Rails application, and the result is called a Hyrax-based application.

Hyrax's documented capabilities include:

* Creating repository object types on demand.
* Depositing content through multiple configurable workflows (see [Deposit workflows](#deposit-workflows) below).
* Describing content with flexible metadata.
* Enabling and disabling optional features through an administrative dashboard.

If an organization wants to build a custom repository application with significant control over its own object model and behavior, Hyrax is the framework layer it would build on.

## Hyku: turn-key multi-tenant application

Hyku is a Hyrax-based application that ships as an installable product rather than a framework. An organization installs Hyku and runs a repository, instead of writing an application against an engine.

Hyku's strongest verified distinguishing capability is multi-tenancy. A single Hyku deployment supports multiple independent tenants, each with its own content and configuration, using the `ros-apartment` library (a maintained Apartment fork). This is what makes Hyku suited to consortial hosting, where one deployment serves many member institutions as separate tenants.

## Valkyrie backend choice and migration portability

Hyrax v5 and later, and Hyku, persist metadata through Valkyrie, a persistence abstraction (Hyku pins `valkyrie ~> 3.0`). Valkyrie lets an organization choose its metadata backend rather than being tied to one store.

* Hyku defaults its metadata adapter to Postgres (`pg_metadata`).
* When the Fedora-backed path is active, Hyku registers a Fedora-backed adapter (`freyja`) and uses it. Hyrax's developer documentation notes Fedora 6.5.1 or later is supported through the Valkyrie Fedora adapter.

Valkyrie also eases migration. Hyku registers a lazy migration from legacy ActiveFedora models to Valkyrie resources, so an organization can move existing content forward into the Valkyrie persistence model. The practical payoff is portability: the choice of metadata store is a configuration decision the adopter controls, not a permanent lock to one backend.

## Storage options

Hyku supports more than one place to keep files, selectable by configuration:

* Local disk storage (`Valkyrie::Storage::Disk`), the default.
* S3-compatible object storage, via the `valkyrie-shrine` integration and a Shrine S3 adapter, enabled by setting the `REPOSITORY_S3_STORAGE` configuration flag. This works with Amazon S3 and S3-compatible object stores.

This gives adopters control over where their files physically live, including their own cloud account.

Honest gap on preservation: these are storage options, not preservation. Hyku has no first-party preservation, fixity, or OAIS function in its codebase. Disk, Fedora-backed, and S3 adapters store and serve files; none of them performs preservation in the OAIS sense. An agent should not describe Hyku as a preservation system, and should not infer fixity or preservation guarantees from the presence of these storage adapters.

## Search and discovery

Hyku provides search, faceting, and a public catalog through Solr indexing and the Blacklight discovery interface. Hyku's default index adapter is Solr (`solr_index`). The Blacklight stack in use includes advanced search (`blacklight_advanced_search`), an OAI provider (`blacklight_oai_provider`), and range-limit faceting (`blacklight_range_limit`), with Blacklight pinned at `~> 7.38`.

Honest gap on performance: search and faceting performance is an acknowledged area of ongoing work across surveyed adopters. The capability is present and real; do not describe it as friction-free or as a performance leader.

## Deposit workflows

Hyrax supports depositing content through multiple configurable workflows. Hyrax loads its built-in deposit workflows into the application database and makes them available to administrative sets, including a workflow loaded for the default administrative set. Administrators work with these workflows rather than having a single hard-coded deposit path.

## Flexible metadata (UI-configurable schemas)

Hyrax v5.3 and later includes flexible metadata, which lets administrators configure metadata schemas through the UI using M3 (Machine-readable Metadata Modeling) profiles. Documented characteristics:

* Schemas are configured through the admin dashboard UI, reducing the need for developer involvement on basic metadata changes.
* Metadata profiles can be versioned, imported, and exported.
* It supports Hyku's multi-tenant architecture.

Two honest constraints an agent must carry:

* It is disabled by default. It must be explicitly enabled, for example via the `flexible` or `flexible_classes` configuration options or the `HYRAX_FLEXIBLE` environment variable. It is not an out-of-the-box default.
* It requires Hyrax v5.3 or later. It is not available in all Hyrax or Hyku versions.

## Avalon (audio and video)

Avalon is the Samvera community's audio and video repository platform, and it is open source.

To confirm with maintainers: Avalon's specific current capabilities. We could not ground Avalon's feature specifics in the code we read for this bundle. An agent needing Avalon detail should consult the Avalon project's own public documentation and confirm specifics directly rather than relying on this bundle for more than the orienting statement above.
