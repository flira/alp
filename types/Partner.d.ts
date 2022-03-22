import type { WpImage } from './WpImage';

/** Data about an ALP partner. */
export interface Partner {
  /** Partner's small bio. */
  bio: string;
  /** Partner's name */
  name: string;
  /** Partner's LinkedIn link */
  linkedin: string;
  photo: WpImage;
}