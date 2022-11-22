import { AlpImage, SizeData, WpImage, WpImageSizes } from './../types/';

/**
 * Sometimes a WordPress image have only the rendered tag under
 * the descritpion tag or the sizes. This function always returns
 * the image data on the same format.
 * @param image WordPress image
 * @returns AlpImage
 */
export function normalizeImgData(image: WpImage): AlpImage | void {
  if (image.description.rendered) {
    return normalizeImgDescription(image);
  }
  if (typeof image.sizes.full !== 'undefined') {
    return normalizeImgSizes(image);
  }
  return void 0;
}

function normalizeImgDescription(image: WpImage): AlpImage {
  const regex: RegExp =
    /(?<=(height|srcset|width)=\s?[\"\'])[^\"\']+/gi;
  let resultArray: Array<string> | null;
  const imgData: AlpImage = {
    alt: image.alt,
    height: 0,
    src: image.url,
    srcset: '',
    width: 0
  };
  while (resultArray = regex.exec(image.description.rendered)) {
    if (/srcset/i.test(resultArray[1])) {
      imgData[resultArray[1] as 'srcset'] =
        resultArray[0];
      continue;
    }
    imgData[resultArray[1] as 'height' | 'width'] =
      + resultArray[0];
  }
  return imgData;
}

function normalizeImgSizes(image: WpImage): AlpImage {
  const imgData: AlpImage = {
    alt: image.alt,
    height: image.sizes.full.height,
    src: image.url,
    srcset: '',
    width: image.sizes.full.width
  };

  const mapSizes: (sizeData: SizeData) => void =
    sizeData => {
      imgData.srcset += `${sizeData.url} ${sizeData.width}w`;
    };

  Object.values(image.sizes).forEach(mapSizes);

  return imgData;
}