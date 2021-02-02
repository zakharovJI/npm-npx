import { ISize, IMedia } from "@/helpers/interfaces";

const size: ISize = {
  mobile: 320,
  tablet: 768,
  tabletM: 1024,
  laptop: 1280,
  desktop: 1440,
};

export const media: IMedia = {
  mobile: `@media (min-width: ${size.mobile}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  tabletM: `@media (min-width: ${size.tabletM}px)`,
  laptop: `@media (min-width: ${size.laptop}px)`,
  desktop: `@media (min-width: ${size.desktop}px)`,
};

export const mediaRevers: IMedia = {
  mobile: `@media (max-width: ${size.mobile - 1}px)`,
  tablet: `@media (max-width: ${size.tablet - 1}px)`,
  tabletM: `@media (max-width: ${size.tabletM - 1}px)`,
  laptop: `@media (max-width: ${size.laptop - 1}px)`,
  desktop: `@media (max-width: ${size.desktop - 1}px)`,
};
