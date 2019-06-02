import React from 'react';
import { MeteorsPage } from '../MeteorsPage';

const text = ['404', 'Page Not Found'];

export function PageNotFound() {
  return <MeteorsPage className="page-not-found" text={text} />;
}
