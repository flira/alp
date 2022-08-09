import { WpImage } from './../types/WpImage';
/**
 * @param {WpImage} image
 * @returns {{ width: number, height: number }}
 * Width and height of the `<img>`.
 */
export function getPhotoDimensions
  (image: WpImage): { width: number, height: number } {
  const html: string = image.description.rendered;
  const widthRegex: RegExp = /width=\s?\"(\d*)\"/i;
  const heightRegex: RegExp = /height=\s?\"(\d*)\"/i;
  return {
    width: widthRegex.test(html) ?
      +(widthRegex.exec(html) as string[])[1] : 0,
    height: heightRegex.test(html) ?
      +(heightRegex.exec(html) as string[])[1] : 0
  }
}

export function getSourceSet(image: WpImage): string | undefined {
  const html: string = image.description.rendered;
  const srcSetRegex: RegExp = /srcset=\s?\"([^\"]*)\"/i;
  if (!srcSetRegex.test(html)) {
    return;
  }
  return (srcSetRegex.exec(html) as string[])[1];
}