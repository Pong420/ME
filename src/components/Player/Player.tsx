import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';

type VideoProps = Parameters<typeof Video>[0];

interface Props extends VideoProps {
  onClose: () => void;
}

const Video = lazy(() => import('./Video' /* webpackChunkName: "video" */));

const el = document.createElement('div');
document.body.appendChild(el);

export function Player({ title, videoSource, onClose }: Props) {
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
