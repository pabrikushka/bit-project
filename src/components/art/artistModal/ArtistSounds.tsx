import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SoundcloudIcon from '../../../assets/icons/soundcloud';
import ApplemusicIcon from '../../../assets/icons/applemusic';
import SpotifyIcon from '../../../assets/icons/spotify';
import Button from 'react-bootstrap/Button';
import { IArtist } from './types';

interface ArtistSoundsProps {
  artist: IArtist;
}

const ArtistSounds = (props: ArtistSoundsProps) => {
  const { artist } = props;
  const hasSpotify = artist.spotify;
  const hasAppleMusic = artist.appleMusic;
  const hasSoundCloud = artist.soundcloud;

  return (
    <div className='mt-5'>
      <Row className='g-4'>
        {hasSpotify && (
          <Col lg='auto'>
            <Button
              variant='outline-primary'
              className='bit-btn icon-btn d-flex d-lg-inline-flex align-items-center'
              href={hasAppleMusic ?? '#'}>
              <SpotifyIcon />
              Spotify
            </Button>
          </Col>
        )}
        {hasAppleMusic && (
          <Col lg='auto'>
            <Button
              variant='outline-primary'
              className='bit-btn icon-btn d-flex d-lg-inline-flex align-items-center'
              href={hasAppleMusic ?? '#'}>
              <ApplemusicIcon />
              Apple Music
            </Button>
          </Col>
        )}
        {hasSoundCloud && (
          <Col lg='auto'>
            <Button
              variant='outline-primary'
              className='bit-btn icon-btn d-flex d-lg-inline-flex align-items-center'
              href={hasSoundCloud ?? '#'}>
              <SoundcloudIcon />
              Soundcloud
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ArtistSounds;
