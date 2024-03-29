import { AlpHeroContent, AlpImage } from '../../types/';
import { imageLoader, normalizeImgData } from "../../modules";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CSS from './hero.module.css';

const landscapeHeight: string = '86vh';
const portraitHeight: string = '38vh';
const getOrientationHeight: () => string =
  () => matchMedia('(orientation: portrait)').matches ?
    portraitHeight : landscapeHeight;

function Hero({ content }: { content: AlpHeroContent[] }): JSX.Element {
  const image: AlpImage | void = normalizeImgData(content[0].image);
  const [heroHeight, setHeroHeight] = useState('0');

  const updateHeight: () => void = () => {
    setHeroHeight(getOrientationHeight());
  }

  const setHeight: () => void = () => {
    if (typeof window === 'undefined') {
      return;
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    }
  }

  useEffect(setHeight);

  return (
    <section className={CSS.hero} style={{ height: heroHeight }}>
      <div className={CSS.slogan}>
        <Image
          alt="Logo da ALP"
          height='125'
          src='/img/logo.svg'
          width='240'
          unoptimized />
        <div>
          {content[0].slogan ? content[0].slogan : ''}
        </div>
      </div>
      {image ?
        <Image
          alt=""
          className={CSS.background}
          layout="fill"
          src={image.src}
          loader={imageLoader.bind(null, image.width / image.height)} /> : ''}
    </section>
  );
};

export default Hero;