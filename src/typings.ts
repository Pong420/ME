export interface Thumbnail {
  src: string;
  width: number;
  height: number;
}

export interface Options {
  [key: string]: string;
}

export interface Schema$Project {
  prefix: string;
  date: string;
  name: string;
  type: string;
  description: string;
  platform: string;
  thumbnail: Thumbnail;
  options: Options;
  num: number;
}
