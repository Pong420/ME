import React from 'react';
import { SEO } from '../SEO';
import '../../utils/console';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};
