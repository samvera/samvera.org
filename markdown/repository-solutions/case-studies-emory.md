---
title: "Case study: Emory University"
date: "2017-02-13"
---

## ETD Application @ Emory University

### Overview

Emory Libraries are recognized as an intellectual center, transforming teaching, learning, research, and patient care through innovative resources, services, and collections for the campus community and beyond.  Part of the Libraries’ mission includes:

- Deliver and produce useful and distinctive services, information, and content.
- Preserve and promote our intellectual and cultural heritage.
- Engage as partners in the academic enterprise to advance student and faculty success.
- Initiate and implement creative and impactful uses of technology.

Emory Libraries’ Scholarly Communications Office (SCO) is particularly impactful in the above areas.  SCO serves Emory faculty, students, and staff by offering a variety of services, including assistance with author agreements and book contracts, copyright questions, electronic theses and dissertations support, open access publication, permissions, and research data management.

### Situation

Emory Libraries’ ETDs application is managed by SCO and Library Technology and Digital Strategies (LTDS) in partnership with Laney Graduate School, Rollins School of Public Health, Candler School of Theology, Neil Hodgson Woodruff School of Nursing, and Emory College Honors Program.  The ETD repository provides online access to the university’s masters theses, doctoral dissertations, and College Honors theses, increasing the visibility of our student scholars and fulfilling the university’s mission to create, disseminate, and preserve new knowledge. To meet the needs of their user base, Emory Libraries partnered with an external vendor, Data Curation Experts (DCE), to develop a Hyrax-based self-deposit application to meet this need.

### Challenge

The previous ETD application was built in 2006/2007, and by 2017, its age and accrued technical debt showed in a variety of ways. The application’s code and its supporting frameworks and tools were unstable and considered a significant security risk.  Additionally, the application required a significant amount of support from SCO and LTDS.  Finally, the age of the application meant the Libraries were unable to develop basic tools such as the ability to ingest video files, very large data files, or multimedia supplements. These needs were uncommon in the early 2000s, but a modern-day repository application absolutely requires this type of capability.

In its first iteration, the ETD software was written in PHP 5.2 using version 1.12 of the Zend framework.  Both the programming language and the framework reached end of life in January of 2011.  Ultimately, this meant the tools supporting the application were difficult or impossible to upgrade and new features were extremely difficult to develop. For example, an attempt to update a school's program list because of a split between the Math and Computer Science department resulted in a significant bug in the application forcing the teams to remove existing functionality in order to remediate it.

Overall, the legacy application required a significant amount of support from staff.  In 2016 there were 531 support tickets submitted for the ETD application.  Roughly 90% of those were handled by SCO’s staff.  The vast majority of these issues were handled during a roughly two-month period at the end of the semester as students deposited their material.  Any tickets SCO was unable to handle they would forward on to LTDS.  Because of the compressed time frame for ETD submission, these requests are usually urgent and complicated, forcing teams to shift their priorities causing significant delays in other work.

### Solution

As the legacy ETD application became increasingly unstable, the Libraries initiated an urgent redevelopment effort in early 2017. Members of the SCO and LTDS teams reviewed multiple scenarios and available platforms, but ultimately, a Samvera-based product provided the best match to initial feature needs combined with the ability to customize for local workflow requirements. During the Spring and Summer of 2017, Emory Libraries partnered with DCE to develop a custom ETD application based on Hyrax, one of the solution bundles built on the Samvera framework.  In the spring of 2018, Emory engaged with DCE to migrate data in their old Fedora-3-based ETD application into their new Hyrax-based application built on top of Fedora 4.

In addition to providing development services, DCE continues to provide long-term support for the application; this includes regular software updates to the underlying infrastructure.  DCE utilizes Amazon Web Services (AWS) for its hosting services, and Emory Libraries is billed according to the services they use in AWS.

In the next several years, the Emory Libraries will move their digital repositories away from their bespoke repository applications toward an all-encompassing repository based on the Samvera framework.  This move is currently in the development phase and will leverage development strategies, features developed, and insights gained as part of the ETD project.

### Benefits

A significant benefit we’ve seen is in the ease of use for our student scholars and school approvers.  Since the launch of the new platform, more than 1,500 students have deposited their work in the new application.  SCO works with students as needed during the deposit of their theses and dissertations, as well as supporting school approvers who have administrative access to the platform to review and approve deposit of the ETDs. The ETD repository heavily leverages the workflow management capabilities provided by Hyrax.  The workflow capabilities allow the application to target notifications and restrict approval access to appropriate school and department staff based on information provided by students when initially submitting their ETD.  SCO staff have frequently remarked on how much simpler the submission process is for students in the new application. Fran Pici remarked that registration numbers have stayed the same, but attendance in workshops has decreased. She states that “after the students check out the application, and see how easy it is to use, they decide that they do not need to attend a workshop.” Likewise, school approvers have been pleased with their interface, describing it as “intuitive and easy to learn and use.”

At the time we began to assess repository platform options in late 2016 and early 2017, DCE had recently begun promoting a hosted service offering based on the Sufia product. That service offering quickly shifted with the release of the re-architected Hyrax product, which merged the roadmaps for the Sufia and Curation Concerns solution bundles into a single base product. DCE was willing to roll the dice with us and not only let us pilot their managed service offering, but also develop a highly customized Hyrax-based offering in its 1.x series within a highly aggressive timeframe. The resulting solution exemplifies the capabilities of Samvera’s mediated workflow capabilities, demonstrating the ability of the Hyrax product to be customized to support unusually complex university business practices.

Prior to migrating to the Hyrax-based application, development at Emory Libraries was slow, time consuming, and primarily focused on basic upgrades and security patches to the ETD application.  Since working with DCE to migrate to the new application we’ve been able to take advantage of the community’s knowledge and updates to the core Hyrax code-base.  In the two years since development started, we have used every stable Hyrax release from 1.0 to 2.4.  Updates to the administrative interface in that time have been greatly appreciated by our users.  Now, our team is able to focus on working with DCE to add features that meet the needs of our stakeholders.

### Screenshots

Old Homepage

![Screenshot of Emory's old homepage](../images/emory-old-homepage-1024x503.png)

New Homepage

![Screenshot of Emory's new homepage](../images/emory-new-homepage-1024x491.png)

Old ETD

![Screenshot of Emory's old ETD page](../images/emory-old-etd-1024x553.png)

New ETD

![Screenshot of Emory's new ETD page](../images/emory-new-etd-1024x692.png)
