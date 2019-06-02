import React, { useRef, useLayoutEffect, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';

type VideoProps = Parameters<typeof Video>[0];

interface Props extends VideoProps {
  onClose: () => void;
}

const Video = lazy(() => import('./Video' /* webpackChunkName: "video" */));

export function Player({ title, videoSource, onClose }: Props) {
  const playerElRef = useRef(null);
  const el = document.createElement('div');

  useLayoutEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(
    <div className="player" ref={playerElRef}>
      <div className="close-player-layer" onClick={() => onClose()} />
      <div className="video">
        <Suspense fallback={null}>
          <Video title={title} videoSource={videoSource} />
        </Suspense>
      </div>
    </div>,
    el
  );
}
