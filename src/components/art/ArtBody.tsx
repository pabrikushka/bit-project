import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

interface ArtBodyProps {
  content: any;
  contentReleased: boolean;
  demoContent?: any;
}

const Text: React.FC<any> = ({ children }) => <p>{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
};

const ArtBody = (props: ArtBodyProps) => {
  const { content, demoContent, contentReleased } = props;

  if (!content) return null;
  return (
    <div className='pe-lg-2 pe-xl-5 art-body-content'>
      {/* <p className="lead mb-4 pb-2">
        It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as
        property, not cash, for tax purposes.
      </p> */}

      {!contentReleased && <div className='art-demo-content'>{documentToReactComponents(demoContent?.json, options)}</div>}
      {contentReleased && <div>{documentToReactComponents(content.json, options)}</div>}
    </div>
  );
};

export default ArtBody;
