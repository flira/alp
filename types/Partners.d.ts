import { WpImage } from './WpImage';
import type { NextComponentType, NextPageContext } from "next";

export type AlpPartnerContent = {
  bio: string,
  linkedin: string,
  name: string,
  photo: WpImage
}

export type AlpPartner<P = AlpPartnerContent, IP = P> = NextComponentType<NextPageContext, P, IP>