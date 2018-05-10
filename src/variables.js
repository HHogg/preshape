import { blue, gray, green, red, violet } from 'open-color';

export const sizeX1Px = 4;
export const sizeX2Px = sizeX1Px * 2;
export const sizeX3Px = sizeX1Px * 3;
export const sizeX4Px = sizeX1Px * 4;
export const sizeX6Px = sizeX1Px * 6;
export const sizeX8Px = sizeX1Px * 8;
export const sizeX10Px = sizeX1Px * 10;
export const sizeX12Px = sizeX1Px * 12;
export const sizeX16Px = sizeX1Px * 16;

export const sizeX1Rem = 0.25;
export const sizeX2Rem = sizeX1Rem * 2;
export const sizeX3Rem = sizeX1Rem * 3;
export const sizeX4Rem = sizeX1Rem * 4;
export const sizeX6Rem = sizeX1Rem * 6;
export const sizeX8Rem = sizeX1Rem * 8;
export const sizeX10Rem = sizeX1Rem * 10;
export const sizeX12Rem = sizeX1Rem * 12;
export const sizeX16Rem = sizeX1Rem * 16;

export const borderSizeX1Px = 1;
export const borderSizeX2Px = 2;

export const borderSizeX1Rem = 0.0625;
export const borderSizeX2Rem = 0.125;

export const colorDarkShade1 = gray[9];
export const colorDarkShade2 = gray[8];
export const colorDarkShade3 = gray[7];

export const colorLightShade1 = gray[0];
export const colorLightShade2 = gray[1];
export const colorLightShade3 = gray[2];

export const colorAccent1Shade1 = blue[4];
export const colorAccent1Shade2 = blue[5];
export const colorAccent1Shade3 = blue[6];

export const colorAccent2Shade1 = violet[4];
export const colorAccent2Shade2 = violet[5];
export const colorAccent2Shade3 = violet[6];

export const colorPositiveShade1 = green[4];
export const colorPositiveShade2 = green[5];
export const colorPositiveShade3 = green[6];

export const colorNegativeShade1 = red[4];
export const colorNegativeShade2 = red[5];
export const colorNegativeShade3 = red[6];

export const themeDay = {
  colorBackgroundShade1: colorLightShade1,
  colorBackgroundShade2: colorLightShade2,
  colorBackgroundShade3: colorLightShade3,
  colorTextShade1: colorDarkShade1,
  colorTextShade2: colorDarkShade2,
  colorTextShade3: colorDarkShade3,
  colorAccentShade1: colorAccent1Shade1,
  colorAccentShade2: colorAccent1Shade2,
  colorAccentShade3: colorAccent1Shade3,
};

export const themeNight = {
  colorBackgroundShade1: colorDarkShade1,
  colorBackgroundShade2: colorDarkShade2,
  colorBackgroundShade3: colorDarkShade3,
  colorTextShade1: colorLightShade1,
  colorTextShade2: colorLightShade2,
  colorTextShade3: colorLightShade3,
  colorAccentShade1: colorAccent2Shade1,
  colorAccentShade2: colorAccent2Shade2,
  colorAccentShade3: colorAccent2Shade3,
};

export const themes = {
  day: themeDay,
  night: themeNight,
};

export const themesOpposite = {
  day: 'night',
  night: 'day',
};

export const transitionTimeFast = 200;
export const transitionTimeBase = 400;
export const transitionTimeSlow = 800;
export const transitionTimingFunction = [0.25, 0.46, 0.45, 0.94];

export const routeTransitionTime = transitionTimeBase;
