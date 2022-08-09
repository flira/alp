export interface backgroundProps {
  attachment?: "scroll" | "fixed";
  blendMode?: string;
  clip?: string;
  color?: string;
  image?: string;
  position?: string;
  repeat?: string;
  size?: string;
}

export interface ResponsiveBackgroundContent {
  background?: backgroundProps
  backgroundSrcSet?: string;
  height?: string;
  width?: string;
}