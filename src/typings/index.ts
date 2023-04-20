import { HistoryLocation } from '@reach/router';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface RouteComponentProps<
  Data = any,
  Context = any,
  LocationState = {}
> {
  path: string;
  location: HistoryLocation & { state: LocationState };
  pageResources: {
    json: {
      pageContext: Context;
    };
    page: {
      componentChunkName: string;
      path: string;
      webpackCompilationHash: string;
    };
  };
  uri: string;
  pageContext: Context;
  pathContext: Context;
  data: Data;
}

export interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

export interface Schema$Project {
  content: string;
  data: {
    slug: string;
    date: string;
    title: string;
    platform: 'web' | 'desktop';
    screenshot: {
      childImageSharp: ChildImageSharp;
    };
    github?: string;
    link?: string;
    video?: {
      publicURL: string;
    };
  };
}
