import React from "react";
import SEO from "@americanexpress/react-seo";
import { ISEOProps } from "../../shared/types";

interface PageSpecificSEOProps extends ISEOProps {
  pageUrl: string | null;
}

const PageSpecificSEO = (props: PageSpecificSEOProps) => {
  const { title, description, imageSrc, keywords, pageUrl } = props;
  if (!title || !description || !imageSrc) {
    return null;
  }
  const base = window.location.origin;
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords ?? []}
        siteUrl={base}
        canonical={pageUrl ?? base}
        image={{
          src: imageSrc,
        }}
      />
    </>
  );
};

export default PageSpecificSEO;
