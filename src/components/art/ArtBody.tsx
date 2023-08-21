import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

interface ArtBodyProps {
  content: any;
  contentReleased: boolean;
  demoContent?: any;
  overview: any;
}

const Text: React.FC<any> = ({ children }) => <p>{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
};

const ArtBody = (props: ArtBodyProps) => {
  const { content, demoContent, contentReleased, overview } = props;

  if (!content) return null;
  return (
    <div className='pe-lg-2 pe-xl-5'>
      <p className='lead fw-normal mb-4 pb-2'>
        {overview}
      </p>
      <div className='art-body-content'>
        {!contentReleased && (
          <div className='art-demo-content'>{documentToReactComponents(demoContent?.json, options)}</div>
        )}
        {contentReleased && <div>{documentToReactComponents(content.json, options)}</div>}
      </div>
      {!contentReleased && <h3 className='mt-5 pb-3'>...Full story dropping soon</h3>}
    </div>
  );
};

export default ArtBody;
