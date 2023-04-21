import React from 'react';
import SEO from '@americanexpress/react-seo';

// TODO consider if need that
const PageSpecificSEO = () => (
  <>
    <SEO
      title="Lorem Ipsum 2"
      description="Lorem ipsum sat delor.2"
      robots={['index', 'follow']}
      keywords={['foo', 'bar']}
      siteUrl="http://example.com"
      openGraph={{
        title: 'Facebook Lorem Ipsum',
        description: 'Facebook Lorem ipsum sat delor.',
        image: {
          src: 'http://example.com/facebook-foo.jpg',
          alt: 'Lorem ipsum',
        }
      }}
      twitterCard={{
        title: 'Twitter Lorem Ipsum',
        description: 'Twitter Lorem ipsum sat delor.',
        image: {
          src: 'http://example.com/twitter-foo.jpg',
          alt: 'Lorem ipsum',
        }
      }}
      alternateLinks={[
        { hreflang: 'en-CA', href: 'http://example.com/en-CA' },
        { hreflang: 'fr-CA', href: 'http://example.com/fr-CA' },
      ]}
    />
  </>
);

export default PageSpecificSEO;