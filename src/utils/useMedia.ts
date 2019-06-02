import { useState, useEffect } from 'react';

export function useMedia(query: string) {
  if (typeof window !== 'undefined') {
    const media = window.matchMedia(query);
    const [matches, setMatches] = useState(!!media.matches);

    useEffect(() => {
      const handler = () => setMatches(media.matches);
      media.addListener(handler);
      return () => media.removeListener(handler);
    }, [media, setMatches]);

    return matches;
  }
}
