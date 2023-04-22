import React from "react";
import SEO from "@americanexpress/react-seo";
import { ISEOProps } from "../../shared/types";

interface DefaultSEOProps extends ISEOProps {}

const DefaultSEO = (props: DefaultSEOProps) => {
  const { title, description, imageSrc, keywords } = props;
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
        image={{
          src: imageSrc,
        }}
      />
    </>
  );
};

export default DefaultSEO;
