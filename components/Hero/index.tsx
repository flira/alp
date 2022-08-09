import { AlpHeroContent, WpImage } from '../../types/';
import { getSourceSet, ResponsiveBackground } from "../../modules";
import { useState, useEffect } from 'react';
import CSS from './hero.module.css';

const landscapeHeight: string = '86vh';
const portraitHeight: string = '38vh';
const getOrientationHeight: () => string =
  () => matchMedia('(orientation: portrait) and (max-width: 480px)').matches ?
    portraitHeight : landscapeHeight;

function Hero({ content }: { content: AlpHeroContent[] }): JSX.Element {
  const img: WpImage = content[0].image;
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
      <ResponsiveBackground
        background={{
          image: `url(${img.url})`
        }}
        backgroundSrcSet={getSourceSet(img)}
        height={heroHeight} />
    </section>
  );
};


export default Hero;