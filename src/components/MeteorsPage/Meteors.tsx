import React, { useEffect, useRef } from 'react';
import random from 'lodash/random';

const meteors = new Array(8).fill(null);

export function Meteors() {
  const meteorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meteors = meteorsRef.current!.querySelectorAll('.meteor');

    const animate = (meteor: HTMLDivElement) => {
      const delay = random(0, meteors.length);

      meteor.className = '';

      setTimeout(() => {
        meteor.style.top = random(-10, 35) + 'vh';
        meteor.style.left = random(15, 100) + 'vw';
        meteor.style.animationDelay = delay + 's';
        meteor.style.webkitAnimationDelay = delay + 's';
        meteor.className = 'meteor';
      }, 0);
    };

    Array.prototype.forEach.call(meteors, (meteor: HTMLDivElement) => {
      animate(meteor);
      meteor.addEventListener('animationend', () => animate(meteor));
      meteor.addEventListener('webkitAnimationEnd', () => animate(meteor));
    });
  }, []);

  return (
    <div className="meteors" ref={meteorsRef}>
      {meteors.map((_, index) => (
        <div className="meteor" key={index} />
      ))}
    </div>
  );
}
