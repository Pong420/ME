import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-plus';
import 'videojs-plus/dist/videojs-plus.css';

(window as any).videojs = videojs;

const defaultPlayerOptions = {
  aspectRatio: '16:9',
  autoplay: true
};

export interface VideoProps {
  title: string;
  videoSource: string;
  playerOptions?: videojs.PlayerOptions;
}

export function Video({ title, videoSource, playerOptions = {} }: VideoProps) {
  const videoElRef = useRef(null);

  useEffect(() => {
    const mergedPlayerOptions = {
      ...defaultPlayerOptions,
      ...playerOptions,
      title
    };

    const player = videojs(videoElRef.current, mergedPlayerOptions);
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
  }, [playerOptions, title, videoSource]);

  return <video ref={videoElRef} />;
}

export default Video;
