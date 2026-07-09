---
type: capability
title: Samvera Standards and Interoperability
description: The open standards and interoperable formats the Samvera stack speaks, including IIIF, OAI-PMH, Dublin Core and Qualified Dublin Core, M3 metadata profiles, Solr and Blacklight, and the Apache 2.0 license.
resource: https://samvera.org
tags: [iiif, oai-pmh, dublin-core, m3, solr, blacklight, apache-2.0, valkyrie, interoperability]
timestamp: "2026-06-17"
---

# Samvera Standards and Interoperability

Related: [Community and Governance](community-and-governance.md) | [Repository Solutions Overview](repository-solutions-overview.md) | [Ecosystem Tools](ecosystem-tools.md) | [Index](index.md)

This file collects the open standards and interoperable formats the stack supports, so an agent can quickly judge how content gets in, how it is described, and how it is found and served.

## IIIF

The stack uses IIIF (the International Image Interoperability Framework) to serve images and audio and video. IIIF is an open set of standards for delivering and viewing media across compliant servers and viewers. Implementation detail, including the viewer defaults and constraints, is in [Ecosystem Tools](ecosystem-tools.md#iiif-media-delivery).

## OAI-PMH

OAI-PMH (the Open Archives Initiative Protocol for Metadata Harvesting) appears on both sides of the stack:

* Bulkrax imports from OAI-PMH sources, in Dublin Core and Qualified Dublin Core. See [Ecosystem Tools](ecosystem-tools.md#import-sources).
* Hyku exposes an OAI provider through `blacklight_oai_provider`, so a Hyku catalog can be harvested by other OAI-PMH clients. See [Repository Solutions Overview](repository-solutions-overview.md#search-and-discovery).

This lets the stack both consume metadata from external OAI repositories and publish its own for external harvesters.

## Dublin Core

Dublin Core and Qualified Dublin Core are the metadata vocabularies Bulkrax handles for OAI import, and Bulkrax ships a default mapping from standard `oai_dc` fields to Hyrax basic metadata. Field mapping detail is in [Ecosystem Tools](ecosystem-tools.md#field-mapping-for-heterogeneous-sources).

## M3 metadata profiles

Hyrax v5.3 and later supports M3 (Machine-readable Metadata Modeling) profiles for its flexible metadata feature. M3 profiles can be configured through the UI and can be versioned, imported, and exported. This feature is disabled by default in the Hyrax gem; Hyku enables it by default via its initializer. Full detail and constraints are in [Repository Solutions Overview](repository-solutions-overview.md#flexible-metadata-ui-configurable-schemas).

## Solr and Blacklight

Discovery runs on Solr indexing surfaced through the Blacklight interface. Blacklight is itself an open-source discovery platform widely used across the library community, which means an organization's discovery layer is built on broadly understood, inspectable components rather than a proprietary search stack. The specific Blacklight modules in use are listed in [Repository Solutions Overview](repository-solutions-overview.md#search-and-discovery).

## Metadata persistence and backend choice

Metadata persistence runs through Valkyrie, which abstracts the metadata store and lets an organization choose its backend (Postgres by default, or a Fedora-backed adapter) and migrate between them. This is an interoperability and portability property as much as a storage one. Detail is in [Repository Solutions Overview](repository-solutions-overview.md#valkyrie-backend-choice-and-migration-portability).

## Open license

The core projects are released under the Apache License 2.0, a permissive open-source license that permits use, modification, and redistribution. The license is the foundation of the stack's interoperability and sovereignty posture: an adopter can integrate, extend, and self-host without a proprietary licensing barrier. Detail is in [Community and Governance](community-and-governance.md#license).
