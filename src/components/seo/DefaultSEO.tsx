import React from "react";
import SEO from "@americanexpress/react-seo";
import { ISEOProps } from "../../shared/types";

interface DefaultSEOProps extends ISEOProps {}

const DefaultSEO = (props: DefaultSEOProps) => {
  const { title, description, keywords } = props;
  const base = window.location.origin;
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords ?? []}
        siteUrl={base}
        image={{
          src: "/opengraph.png",
        }}
      />
    </>
  );
};

export default DefaultSEO;
