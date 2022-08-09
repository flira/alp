export interface WpImage {
  alt: string,
  caption: string,
  description: {
    raw: string;
    rendered: string;
  }
  id: number,
  link: string,
  sizes: string;
  title: string;
  url: string,
}