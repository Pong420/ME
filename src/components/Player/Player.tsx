import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { VideoProps } from './Video';

interface Props extends VideoProps {
  onClose: () => void;
}

const Video = lazy(() => import('./Video' /* webpackChunkName: "video" */));

let el: HTMLDivElement;
// check document for for gastby build
if (typeof document !== 'undefined') {
  el = document.createElement('div');
  document.body.appendChild(el);
}

export function Player({ onClose, ...videoProps }: Props) {
  return createPortal(
    <div className="player">
      <div className="close-player-layer" onClick={onClose} />
      <div className="video">
        <Suspense fallback={null}>
          <Video {...videoProps} />
        </Suspense>
      </div>
    </div>,
    el
  );
}
