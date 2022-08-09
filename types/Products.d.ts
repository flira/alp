import { AlpProduct } from './Products.d';
import type { NextComponentType, NextPageContext } from 'next';

export type AlpProductContent = {
  description: string,
  icon: string,
  name: string,
};

export type AlpProduct<P = AlpProductContent, IP = P> =
  NextComponentType<NextPageContext, P, IP>;
