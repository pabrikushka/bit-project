import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

interface ArtBodyProps {
  content: any
}

const Text: React.FC<any> = ({ children }) => <p>{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  }
};

const ArtBody = (props: ArtBodyProps) => {
  const {content} = props;
  if(!content) return null;
  return (
    <div className="pe-xl-5">
      {/* <p className="lead mb-4 pb-2">
        It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as
        property, not cash, for tax purposes.
      </p> */}
     {documentToReactComponents(content.json, options)}
    </div>
  );
};

export default ArtBody;
