---
title: "Find the Samvera solution that fits your work"
date: "2026-06-18"
---

You're choosing a repository platform, and the first question is the practical one. Does this fit the job in front of me? Samvera is a community of libraries, archives, and the institutions that run them, and the software it maintains covers most of what a library repository program actually has to do. Start by matching your work to a solution, then go to that solution's site to see it run and request a demo.

## Match your work to a solution

You need an institutional repository, a cultural heritage collection, or a home for theses and dissertations. Hyku is the solution. It is a complete repository application you deploy and configure, rather than a framework you build on, and it manages works, collections, and files for content of many kinds. Multi-tenancy is built in, so the same installation runs a single repository or serves many separate branded sites, each with its own access controls and configuration, which is why it suits a single library as readily as a multi-institution consortium. See it at hyku.samvera.org.

You're a single institution that wants to build something specific and customize deeply. Hyrax is the framework Hyku is built on. It's a Samvera Rails engine you mount into your own application, which gives a team with development capacity room to shape the repository around requirements an out-of-the-box product would constrain. Hyku is the ready-to-deploy application built on Hyrax; Hyrax is the better choice when significant customization is the point. See it at hyrax.samvera.org.

You manage audio and video. Avalon is purpose-built for it. It transcodes uploaded media into web-deliverable formats, supports captions and transcripts with per-file language and an in-document transcript search, and gives staff role-based and inheritable access control across units and collections. Avalon is led by the libraries of Indiana University Bloomington and used by libraries and media collections across higher education. See it at avalon.samvera.org.

## Why the architecture lowers your risk

The reason to evaluate these platforms together is what they share underneath, and that's where the risk question for an evaluator gets answered.

Your metadata travels in open, documented formats. Hyku and Hyrax describe content in Dublin Core, publish their collections for harvesting over OAI-PMH, and support RDF, and each platform serves its content through IIIF. Description held in documented, interoperable standards is description you can move. That's the substantive guarantee that you can leave if you ever need to, and it holds whether you self-host or use any service provider.

You can change the storage backend underneath you. Hyrax and Hyku use Valkyrie, a data layer that connects the application to a backend through adapters. You choose where your metadata and files live, including Postgres, Fedora 6, or, in Hyku, S3-compatible cloud storage out of the box. Valkyrie can also read from one backend and write to another, so moving between stores is a supported operation.

Your customizations survive upgrades. On Hyku, local customizations live in a separate layer that loads on top of the core and takes precedence over it, so the platform can be upgraded without unwinding your changes. Branding and appearance are configurable from the admin dashboard without a code release. And the work of staying current is shared across the community, so no single institution carries it alone.

## The part people get wrong about open source

Adopting one of these platforms is a real commitment. You run it with your own team, or you pick one of the service providers listed openly on this site to host and support it for you. Either way the code, your data, and the open standards above stay yours. That's the honest shape of the decision, and it's also the answer to the worry that open source means unsupported and you'll be stranded with no one to call.

Direction is set through the Samvera community, with published governance, so the institutions that fund and use the software shape where it goes. The standards-based portability above means your content is yours to take regardless. Support and governance are documented here, where you can read them before you talk to a single vendor.

## Next step

Identify the solution that matches your work and go to its site to see it running. When you're ready to evaluate seriously, request a demo and a migration assessment from one of the service providers listed here; they'll tell you honestly what moving your collection would involve. To see how peer institutions have built their repositories first, browse live sites on the Samvera Repository Tour.
