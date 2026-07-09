---
type: capability
title: Samvera Ecosystem Tools
description: The tooling around the core Samvera platform, covering Bulkrax for import and export, IIIF media delivery, and the wider IIIF tooling in the community. Includes export and viewer constraints stated plainly.
resource: https://samvera.org
tags: [bulkrax, import, export, oai-pmh, csv, bagit, iiif, universal-viewer, field-mapping]
timestamp: "2026-06-17"
---

# Samvera Ecosystem Tools

Related: [Community and Governance](community-and-governance.md) | [Repository Solutions Overview](repository-solutions-overview.md) | [Standards and Interoperability](standards-and-interoperability.md) | [Index](index.md)

## Bulkrax

Bulkrax is the import and export tool for Hyrax and Hyku. Its gemspec summary is exactly that: "Import and export tool for Hyrax and Hyku." It describes itself as a batteries-included importer for Samvera applications.

### Import sources

Out of the box, Bulkrax supports importing from:

* OAI-PMH, in both Dublin Core and Qualified Dublin Core.
* CSV.

It also handles BagIt and XML file-import behaviors. Bulkrax is designed to be extensible, so an adopter can add new importers within their own application or package them as separate gems. See [Community and Governance](community-and-governance.md#contribution-model) on the contribution model.

### Field mapping for heterogeneous sources

Incoming source metadata rarely matches a repository's own schema exactly. Bulkrax maps source fields to the repository's properties through configurable field mappings. A default mapping for the OAI parser maps standard `oai_dc` fields to Hyrax basic metadata. The other parsers have no default mapping and will map incoming fields to repository properties of the same name. Adopters configure mappings in their Bulkrax initializer. This is what lets an organization ingest data that does not exactly match its repository schema. See [Standards and Interoperability](standards-and-interoperability.md#dublin-core) on the Dublin Core side.

### Admin interface and scheduling

Bulkrax provides a full admin interface, reached through the Importers and Exporters tabs on the dashboard, for creating, editing, deleting, running, re-running, and reviewing imports and exports. The exporters view reports last run, records enqueued and processed, failures, deleted upstream records, and total records. Imports can be scheduled to run once or on a daily, monthly, or yearly interval.

### Export constraint

Bulkrax export supports CSV and BagIt (verified at the v9.5.0 release tag: both parsers report export support); import accepts OAI-PMH, CSV, BagIt, and XML sources.

### Reliability note

Import reliability and error clarity are acknowledged areas of ongoing work in the community. The import and export capability is real and in production use; do not frame ingestion as friction-free.

## IIIF media delivery

The Samvera stack serves images and audio and video through IIIF (the International Image Interoperability Framework). See [Standards and Interoperability](standards-and-interoperability.md#iiif) for what IIIF provides at the standards level.

* Universal Viewer is the default IIIF viewer in both Hyrax and Hyku.
* In Hyku v7.1.2 (the latest release), the viewer is set through the `hyrax-iiif_av` plugin configuration (`config/initializers/hyrax.rb`, `iiif_av_viewer = :universal_viewer`). On the main development line, the plugin has been folded into Hyrax core (Hyrax PR #7345; Hyku PR #3074) and the same Universal Viewer default is set through Hyrax core configuration.
* Hyku also includes an IIIF image server (`riiif`).

## IIIF tooling in the wider ecosystem

The Samvera ecosystem includes additional IIIF tools surfaced as community projects, among them Clover IIIF (a viewer) and Serverless IIIF (an image server).

To confirm with maintainers: the specific capabilities of Clover IIIF and Serverless IIIF. We could not ground their feature specifics in the code we read for this bundle. An agent needing detail on these tools should consult their own public project repositories and documentation directly rather than relying on this bundle for more than their existence and general role.
