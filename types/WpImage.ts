export interface SizeData {
  height: number,
  width: number,
  url: string,
  orientation: string
};

export interface WpImageSizes {
  thumbnail?: SizeData,
  medium?: SizeData,
  large?: SizeData,
  full: SizeData
}

export interface WpImage {
  alt: string,
  caption: string,
  description: {
    raw: string;
    rendered: string;
  }
  id: number,
  link: string,
  sizes: WpImageSizes;
  title: string;
  url: string,
}

export interface AlpImage {
  alt: string,
  height: number,
  src: string,
  srcset: string,
  width: number
}