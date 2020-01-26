import { Location } from '@reach/router';

export interface RouteComponentProps<Data = any, Context = any> {
  path: string;
  location: Location;
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
  fluid: Fluid;
}

export interface Fluid {
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}
