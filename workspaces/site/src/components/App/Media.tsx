import { createMedia } from '@artsy/fresnel';

const PreshapeMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 800,
  },
});

export const mediaStyles = PreshapeMedia.createMediaStyle();

export const { Media, MediaContextProvider } = PreshapeMedia;
