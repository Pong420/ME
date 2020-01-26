import { useState, useEffect } from 'react';

export function useMedia(query: string) {
  if (typeof window !== 'undefined') {
    const media = window.matchMedia(query);
    // eslint-disable-next-line
    const [matches, setMatches] = useState(!!media.matches);

    // eslint-disable-next-line
    useEffect(() => {
      const handler = () => setMatches(media.matches);
      media.addListener(handler);
      return () => media.removeListener(handler);
    }, [media, setMatches]);

    return matches;
  }
}
