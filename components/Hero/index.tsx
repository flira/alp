import { AlpHeroContent, AlpImage } from '../../types/';
import { normalizeImgData, ResponsiveBackground } from "../../modules";
import { useState, useEffect } from 'react';
import CSS from './hero.module.css';

const landscapeHeight: string = '86vh';
const portraitHeight: string = '38vh';
const getOrientationHeight: () => string =
  () => matchMedia('(orientation: portrait) and (max-width: 480px)').matches ?
    portraitHeight : landscapeHeight;

function Hero({ content }: { content: AlpHeroContent[] }): JSX.Element {
  const image: AlpImage | void = normalizeImgData(content[0].image) ;
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
      {image ? <ResponsiveBackground
        background={{
          image: `url(${image.src})`
        }}
        backgroundSrcSet={image.srcset}
        height={heroHeight} /> : ''}
    </section>
  );
};

export default Hero;