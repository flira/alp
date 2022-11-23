const imageLoader: (props: { src?: string, width?: number, quality?: number }) => string =
  ({src, width}) => {
  return `https://media.assets.so/?url=${src}?w=${width}&f=auto&fit=fill`;
}

export default imageLoader;