---
title: "Hyku 3.0 Release Includes New Customization Features"
date: "2021-02-17"
categories: 
  - "news"
  - "software-updates"
tags: 
  - "hyku"
---

[Hyku 3.0](https://github.com/samvera/hyku/releases/tag/v3.0.0) is now available, with new features and improvements. These features add customization options at the institution level, and the improvements provide for easier maintenance of Hyku implementations across all adopters.

#### **Theming Improvements**

Now even more theming capability is in the hands of non-technical administrators, offering the ability to create a unique branded repository without reliance on internal technical support or a development team. Admins can customize CSS in the interface, choose additional font and color options, and have the ability to set default images and logos at the tenant level.

#### **Bulkrax Importer and Exporter now Optional**

This feature ranked as a top-priority need for the community in the recent [community survey of Hyku features](https://advancinghyku.io/2020/12/11/advancing-hyku-community-survey-results-january-2021/) conducted by the Advancing Hyku Project. Bulkrax Importer and Exporter is now optional behind a feature flipper, allowing admins to turn the feature on or off for your instance. It’s also now connected to BrowseEverything, and includes a status dashboard at the tenant level for self service. Bulkrax currently supports OAI-PMH, CSV, XML, and Bagit formats, and increases in scope with each iteration. The ability to toggle on/off behind a feature flipper was supported by the Hyku National Transportation Library 3.0 project for the US Department of Transportation.

#### **Contact Page Customization at the Tenant Level**

Each institution can now configure contact information for their repository instance. This moves Hyku toward truly discrete tenants. This feature helps repository-level compliance with existing community frameworks and requirements such as Core Trust Seal, TRUST Principles and COAR Community Framework which require baseline software information and user support

#### **Improved User Management Capabilities**

This includes superuser role, tenant-level role improvements, removal of registration requirements when SSO is in place, and groundwork for future permissions updates. These improvements allow individual tenant institutions to manage their own users and repositories across a multiple institution implementation, such as with the [Advancing Hyku](https://advancinghyku.io/)/British Library multi-tenant implementation or the [Hyku for Consortia](https://www.hykuforconsortia.org/)/PALNI-PALCI multi-tenant consortial pilot. The SSO update allows for smoother adoption by institutions with their own login protocol requirements

#### **New Embargo and Lease Options**

Embargo and Lease features have been upgraded to automatic release with background jobs. This functionality allows multiple options for visibility, such as worldwide visible or institution-only, to expire at designated times. This feature helps repositories to be compliant with publisher policies while ensuring the content is made available via the repository, without requiring administrator intervention when visibility requirements expire or open. This feature is part of the recent [Advancing Hyku](https://advancinghyku.io/) core code contribution to Hyku 3.0.

Additional improvements in this release include **upgrades** to Hyrax 2.9, Rails 5.2, and Ruby 2.7, with the removal of redundant code; and **helm chart Kubernetes** deployment. Convergence on shared infrastructure and software stacks for Hyku 3.0 core means easier maintenance for Hyku implementations across all adopters. It brings us closer to the goal that we’ll all be on the same version, running the same code. ([All Hyku 3.0 instances](https://wiki.lyrasis.org/display/hyku/Hyku+Implementations))

All the release details can be found in the [release notes](https://github.com/samvera/hyku/releases/tag/v3.0.0).

##### **What can Hyku 3.0 enable for your project? Interested in learning more about Hyku?**

Join us for the next [Hyku Interest Group call](https://samvera.atlassian.net/wiki/spaces/samvera/pages/419533203/Samvera+Hyku+Interest+Group)! All are welcome to attend. You can also ask questions in the Hyku channel on the [Samvera Slack workspace](https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211682/Get+in+touch), and check out videos of Hyku in action on the [Hyku YouTube channel](https://www.youtube.com/channel/UC_m1Ovaaasa2ksyGaqz5i0Q/featured).
