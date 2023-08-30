import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IArtist } from '../types';

interface SocialsFooterProps {
  artist: IArtist;
}

const SocialsFooter = (props: SocialsFooterProps) => {
  const { artist } = props;

  const hasDiscord = artist.discord;
  const hasInstagram = artist.instagram;
  const hasYouTube = artist.youTube;
  const hasMastodon = artist.mastodon;
  const hasTwitter = artist.twitter;

  console.log(hasDiscord, hasInstagram, hasYouTube, hasMastodon, hasTwitter);

  return (
    <Row className='g-2 mt-4'>
      <Col xs={12}>
        <h3 className='small font-aeonik text-light-70 mb-md-0'>Socials</h3>
      </Col>
      {hasDiscord && (
        <Col xs={12} md={3}>
          <a className='nav-link p-0 text-start fs-1' href={hasDiscord ?? '#'}>
            <span className='h5 m-0'>Discord</span>
          </a>
        </Col>
      )}
      {hasInstagram && (
        <Col xs={12} md={3}>
          <a className='nav-link p-0 text-start fs-1' href={hasInstagram ?? '#'}>
            <span className='h5 m-0'>Instagram</span>
          </a>
        </Col>
      )}
      {hasYouTube && (
        <Col xs={12} md={3}>
          <a className='nav-link p-0 text-start fs-1' href={hasYouTube ?? '#'}>
            <span className='h5 m-0'>YouTube</span>
          </a>
        </Col>
      )}
      {hasMastodon && (
        <Col xs={12} md={3}>
          <a className='nav-link p-0 text-start fs-1' href={hasMastodon ?? '#'}>
            <span className='h5 m-0'>Mastodon</span>
          </a>
        </Col>
      )}
      {/* uncomment when needed */}
      {/* {hasTwitter && (
        <Col xs={12} md={3}>
          <a className='nav-link p-0 text-start fs-1' href={hasTwitter ?? '#'}>
            <span className='h5 m-0'>Twitter</span>
          </a>
        </Col>
      )} */}
    </Row>
  );
};

export default SocialsFooter;
