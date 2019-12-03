import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-plus';
import 'videojs-plus/dist/videojs-plus.css';

// @ts-ignore
window.videojs = videojs;

const defaultPlayerOptions = {
  aspectRatio: '16:9',
  autoplay: true
};

interface Props {
  title: string;
  videoSource: string;
}

export function Video({ title, videoSource }: Props) {
  const videoElRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playerOptions = {
      ...defaultPlayerOptions,
      title
    };

    const player = videojs(videoElRef.current, playerOptions);
    const src = /http(s)?/.test(videoSource)
      ? videoSource
      : require(`../../assets/video/${videoSource}`);

    player.src({
      src,
      type: 'video/mp4'
    });

    return () => {
      player.dispose();
    };
  }, [title, videoSource]);

  return <video ref={videoElRef} />;
}

export default Video;
