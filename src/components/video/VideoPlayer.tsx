import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  video: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  return <ReactPlayer url={props.video} playing={true} controls={true} width='100%' height='100%' />;
};

export default VideoPlayer;
