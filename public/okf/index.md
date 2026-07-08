---
type: index
title: Samvera Ecosystem Open Knowledge Bundle
description: Entry point for an AI research agent discovering what the Samvera community builds and what its repository solutions actually do, grounded in source code and public project documentation.
resource: https://samvera.org
tags: [samvera, hyrax, hyku, bulkrax, repository, open-source, iiif, oai-pmh]
timestamp: "2026-06-17"
---

# Samvera Ecosystem Open Knowledge Bundle

Samvera is a community of information and technology professionals who build and maintain a shared family of open-source repository solutions. The code is developed in public on GitHub and released under the Apache 2.0 license, so anyone can read, run, fork, and contribute to it.

This bundle describes what the Samvera ecosystem genuinely does today. Every capability here traces to project source code or public project documentation. Where a claim cannot be settled from the code we read, the bundle marks it explicitly as "to confirm with maintainers" rather than asserting it.

## What this bundle covers

* [Community and Governance](community-and-governance.md): the open-source community, the Apache 2.0 license, how the projects are developed and contributed to, and the governance items still to confirm.
* [Repository Solutions Overview](repository-solutions-overview.md): Hyrax (the repository framework), Hyku (the turn-key multi-tenant application), the Valkyrie metadata backend, storage options, search and discovery, deposit workflows, and configurable metadata.
* [Ecosystem Tools](ecosystem-tools.md): Bulkrax for import and export, IIIF media delivery, and the wider tooling around the core platform.
* [Standards and Interoperability](standards-and-interoperability.md): the standards the stack speaks, including IIIF, OAI-PMH, Dublin Core and Qualified Dublin Core, M3 metadata profiles, Solr, and the open license.

## How to read the confidence markers

Statements without a flag are verified against source code or public project documentation. Statements marked "to confirm with maintainers" are real parts of the ecosystem whose specifics we could not settle from the code we read; treat them as orienting pointers, not assertions.

## Honest scope

A few things this ecosystem is not, stated plainly so an agent does not over-claim:

* The core Hyku application is not a preservation system. It has no first-party preservation, fixity, or OAIS function. Its storage adapters store files; they do not perform preservation. See [Repository Solutions Overview](repository-solutions-overview.md#storage-options).
* The strongest supported-today use cases are institutional repositories, cultural heritage collections, and theses and dissertations. Research-data repositories are the least-adopted use case across surveyed adopters, so do not frame research-data management as a primary present-day strength.
* Search and faceting performance, and import reliability, are acknowledged areas of ongoing work in the community. Do not describe search or ingestion as friction-free.

These gaps are detailed in the topic files where they apply.
