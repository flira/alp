import { AlpHeroContent } from './Hero.d';
import { AlpAboutContent } from './About.d';
import { AlpPartner, AlpPartnerContent } from './Partners.d';
import { AlpProduct, AlpProductContent } from './Products.d';
import { React } from 'react';
import type { NextComponentType, NextPageContext } from 'next';

type AlpContent =
  AlpAboutContent[] |
  AlpHeroContent [] |
  AlpPartnerContent[] |
  AlpProductContent[];

export type AlpPage<P = {
  content: AlpContent | string,
  id?: string,
  ref?: React.RefObject<HTMLElement>
}, IP = P> =
  NextComponentType<NextPageContext, P, IP>

export interface Pages {
  pages: PageResponse[];
};

export interface PageResponse {
  content: {
    rendered: string;
    protected: boolean;
  }
  meta: { [key: string]: string }
  title: {
    rendered: string;
  };
};