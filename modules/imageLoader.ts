const imageLoader: (ratio: number, props: { src: string, width: number, quality?: number }) => string =
  (ratio, {src, width}) => {
  /* src: https://dev.me/products/image-optimizer */
  return `https://media.assets.so/?url=${src}?w=${width}&h=${width / ratio}&f=auto`;
}

export default imageLoader;