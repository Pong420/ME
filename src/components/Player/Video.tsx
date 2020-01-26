import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-plus';
import 'videojs-plus/dist/videojs-plus.css';

const defaultPlayerOptions: videojs.PlayerOptions = {
  aspectRatio: '16:9',
  autoplay: true
};

export interface VideoProps {
  title: string;
  src: string;
}

export function Video({ title, src }: VideoProps) {
  const videoElRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = videojs(videoElRef.current, {
      ...defaultPlayerOptions,
      title
    });

    player.src({ src, type: 'video/mp4' });

    return () => {
      player.dispose();
    };
  }, [title, src]);

  return <video ref={videoElRef} />;
}

export default Video;
