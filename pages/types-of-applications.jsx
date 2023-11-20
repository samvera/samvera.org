import {
  ArchiveBoxIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";

import Breadcrumbs from "components/Breadcrumbs";
import Layout from "components/layout/Layout";
import Main from "components/layout/Main";
import RichTextContent from "components/RichTextContent";
import { getApplicationTypes } from "lib/cms/get-application-types";
import { useQuery } from "@tanstack/react-query";

export function AtIcon({ atId, ...restProps }) {
  switch (atId) {
    // IRs
    case "6pLvmIw3TRhxlGaZV1W2rs":
      return <BuildingLibraryIcon {...restProps} />;
    // Publishing
    case "1cbBPhUnF5LSBJazLvzHcw":
      return <CloudArrowUpIcon {...restProps} />;
    // Archives
    case "7LO7Hi8pTwH03zIno59z0U":
      return <ArchiveBoxIcon {...restProps} />;
    // Data and Preservation
    case "ZT7fk7o6VoSPS1EO78qwY":
      return <BriefcaseIcon {...restProps} />;
    // Solution Bundles
    case "1gZrZYkl3JSnAWtb8ojNOB":
      return <CircleStackIcon {...restProps} />;
    // Media
    case "11FkyMQyUwhfNq2pGDpw5L":
      return <SpeakerWaveIcon {...restProps} />;
    default:
      return <CheckBadgeIcon {...restProps} />;
  }
}

export default function TypesOfApplications() {
  const query = useQuery({
    queryKey: ["applicationTypes"],
    queryFn: getApplicationTypes,
  });

  return (
    <Layout>
      <Main>
        <Breadcrumbs
          items={[
            {
              href: "/",
              label: "Home",
            },
          ]}
        />
        <h1>Types of Applications</h1>
        <div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2">
          {query.data?.map((at) => {
            const { title, description } = at.fields;

            return (
              <div key={at.sys.id}>
                <h2 className="flex items-center w-full">
                  <AtIcon
                    atId={at.sys.id}
                    className="inline-block w-6 h-6 mr-3 text-samBlue"
                  />

                  {title}
                </h2>
                <RichTextContent content={description} />
              </div>
            );
          })}
        </div>
      </Main>
    </Layout>
  );
}
