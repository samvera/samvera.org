import React from "react";

export default function BenefitHow() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(143, 39, 4) 50%, rgb(143, 39, 4) 100%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-12">
          <div className="py-10">
            <h2 className="section-title">Benefits of Samvera</h2>
            <p>
              We believe that no single system can&nbsp;provide the full range
              of repository-based solutions for a given institution’s needs and
              that no single institution can resource the development of a full
              range of solutions on its own.
            </p>
            <p>
              Working together, the Samvera Community creates sustainable
              solutions using a common infrastructure within which there is the
              flexibility to tailor solutions to local demands and workflows.
            </p>
            <p>
              Samvera software is free and open source, available under an
              Apache 2 license.
            </p>
          </div>
          <div className="py-10 pl-6 text-white">
            <h2 className="section-title">How it Works</h2>
            <p>
              Samvera maintains a set of Ruby on Rails components (Ruby gems)
              that, together, can be used to build flexible and extensible
              digital repository solutions. Hyrax combines a number of these
              components into a toolkit (a Rails engine) for building repository
              applications to meet a wide range of repository requirements,
              whilst Hyku is an out-of-the-box repository application with
              multi-tenant capability built on Hyrax.
            </p>
            <p>
              Samvera does not work in isolation and relies on a number of
              external open source components, including:
            </p>
            <ul>
              <li>
                <a href="https://duraspace.org/fedora/">Fedora</a> – a durable
                repository layer for persisting and managing digital objects.
              </li>
              <li>
                <a href="https://lucene.apache.org/solr/">Apache Solr</a> – a
                fast and performant search platform
              </li>
              <li>
                <a href="http://projectblacklight.org/">Blacklight</a> – a
                discovery platform built on Solr
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
