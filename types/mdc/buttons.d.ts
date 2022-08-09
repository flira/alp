import type { NextComponentType, NextPageContext } from 'next';
import { MouseEventHandler } from 'react';

export type MDCButton<P = {
  disabled?: boolean,
  eventHandler?: React.MouseEventHandler<HTMLButtonElement>,
  label: string,
  type?: "button" | "submit" | "reset"
}, IP = P> = NextComponentType<NextPageContext, P, IP>;
