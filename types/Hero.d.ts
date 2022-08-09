import { WpImage } from './WpImage';
import type { NextComponentType, NextPageContext } from "next";

export type AlpHeroContent = {
  image: WpImage,
  slogan: string
}

export type AlpHero<P = AlpHeroContent, IP = P> = NextComponentType<NextPageContext, P, IP>