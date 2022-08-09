import type { NextComponentType, NextPageContext } from 'next';

export type AlpMenuItem<P = { target: React.RefObject<HTMLElement> }, IP = P> =
  NextComponentType<NextPageContext, P, IP>;
