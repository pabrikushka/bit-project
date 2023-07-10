import React from 'react'
// @ts-ignore
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'

interface VideoPlayerProps {
  video: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <Video autoPlay loop>
      <source src={props.video} type='video/mp4'/>
    </Video>
  )
}

export default VideoPlayer