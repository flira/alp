import type { NextComponentType, NextPageContext } from 'next';

export type AlpAboutContent = {
  paragraph: string
};

export type AlpAbout<P = AlpAboutContent, IP = P> =
  NextComponentType<NextPageContext, P, IP>;
