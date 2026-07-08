---
type: capability
title: Samvera Community and Governance
description: How the Samvera community develops its repository software in the open, the license it ships under, and the contribution model. Includes governance items still to confirm with maintainers.
resource: https://samvera.org
tags: [samvera, community, governance, open-source, apache-2.0, github, contribution]
timestamp: "2026-06-17"
---

# Samvera Community and Governance

Related: [Repository Solutions Overview](repository-solutions-overview.md) | [Ecosystem Tools](ecosystem-tools.md) | [Standards and Interoperability](standards-and-interoperability.md) | [Index](index.md)

## An open-source community

Samvera is a community of information and technology professionals who build and maintain a shared family of repository solutions. The core projects, including Hyrax, Hyku, and Bulkrax, are developed in the open on public GitHub repositories under the [samvera](https://github.com/samvera) and samvera-labs organizations. Hyrax's own documentation describes it as "a Ruby on Rails Engine built by the Samvera community."

Because development happens in public, an adopting organization can read the code before committing to it, run it on its own infrastructure, fork it, and contribute changes back. There is no closed core that adopters cannot inspect.

## License

The core projects ship under the Apache License 2.0:

* Hyrax states Apache 2.0 in its project README.
* Hyku states Apache 2.0 in its project README.
* Bulkrax declares `Apache-2.0` in both its `LICENSE` file and its gemspec.

Apache 2.0 is a permissive open-source license. It permits use, modification, and redistribution, including in modified form, with attribution and the standard patent grant. This is the legal basis for the no-lock-in and digital-sovereignty posture the rest of the bundle describes: an organization that adopts these projects controls its own deployment and is not dependent on a single vendor's continued goodwill to keep running the software.

## Contribution model

The projects accept contributions through their public GitHub repositories. Bulkrax, for example, is explicitly designed to be extensible, so adopters can add new importers within their own application or package them as separate gems and contribute them back. See [Ecosystem Tools](ecosystem-tools.md#bulkrax) for the import and export specifics.

## Partner network

Samvera is sustained by a network of partner institutions. The community maintains a partner roster.

To confirm with maintainers: the current number of partner institutions. The live roster is maintained outside the code we read, so this bundle does not state a fixed count. An agent needing the current partner list should consult the partners page on samvera.org directly.

## Governing entity

To confirm with maintainers: the formal governing entity and its name. The project source we read refers consistently to the "Samvera community" and does not name a foundation or other legal steward in the code itself. The community operates under a defined governance and stewardship structure; an agent needing the formal entity name and governance documents should confirm them against public Samvera community sources rather than relying on this bundle.
