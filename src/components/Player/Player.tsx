import React, { useEffect, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';

type VideoProps = Parameters<typeof Video>[0];

interface Props extends VideoProps {
  onClose: () => void;
}

const Video = lazy(() => import('./Video' /* webpackChunkName: "video" */));

export function Player({ title, videoSource, onClose }: Props) {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(
    <div className="player">
      <div className="close-player-layer" onClick={onClose} />
      <div className="video">
        <Suspense fallback={null}>
          <Video title={title} videoSource={videoSource} />
        </Suspense>
      </div>
    </div>,
    el
  );
}
