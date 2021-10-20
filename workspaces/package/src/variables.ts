import color from 'open-color';
import { TypeTheme } from './Box/Box';

export const sizeX1Px = 4;
export const sizeX2Px = sizeX1Px * 2;
export const sizeX3Px = sizeX1Px * 3;
export const sizeX4Px = sizeX1Px * 4;
export const sizeX5Px = sizeX1Px * 5;
export const sizeX6Px = sizeX1Px * 6;
export const sizeX8Px = sizeX1Px * 8;
export const sizeX10Px = sizeX1Px * 10;
export const sizeX12Px = sizeX1Px * 12;
export const sizeX16Px = sizeX1Px * 16;

export const sizeX1Rem = 0.25;
export const sizeX2Rem = sizeX1Rem * 2;
export const sizeX3Rem = sizeX1Rem * 3;
export const sizeX4Rem = sizeX1Rem * 4;
export const sizeX5Rem = sizeX1Rem * 5;
export const sizeX6Rem = sizeX1Rem * 6;
export const sizeX8Rem = sizeX1Rem * 8;
export const sizeX10Rem = sizeX1Rem * 10;
export const sizeX12Rem = sizeX1Rem * 12;
export const sizeX16Rem = sizeX1Rem * 16;

export const borderSizeX1Px = 1;
export const borderSizeX2Px = 2;

export const borderSizeX1Rem = 0.0625;
export const borderSizeX2Rem = 0.125;

export const colorWhite = '#FFFEFC';
export const colorBlack = '#1E1B18';

export const colorDarkShade1 = color.gray[9];
export const colorDarkShade2 = color.gray[8];
export const colorDarkShade3 = color.gray[7];

export const colorLightShade1 = color.gray[0];
export const colorLightShade2 = color.gray[1];
export const colorLightShade3 = color.gray[2];

export const colorAccent1Shade3 = color.indigo[5];
export const colorAccent1Shade4 = color.indigo[6];
export const colorAccent1Shade5 = color.indigo[7];

export const colorAccent2Shade3 = color.grape[5];
export const colorAccent2Shade4 = color.grape[6];
export const colorAccent2Shade5 = color.grape[7];

export const colorPositiveShade3 = color.teal[5];
export const colorPositiveShade4 = color.teal[6];
export const colorPositiveShade5 = color.teal[7];

export const colorNegativeShade3 = color.pink[5];
export const colorNegativeShade4 = color.pink[6];
export const colorNegativeShade5 = color.pink[7];

export const colorHighlight = color.yellow[2];

export const themeDay = {
  colorBackgroundShade1: colorLightShade1,
  colorBackgroundShade2: colorLightShade2,
  colorBackgroundShade3: colorLightShade3,
  colorTextShade1: colorDarkShade1,
  colorTextShade2: colorDarkShade2,
  colorTextShade3: colorDarkShade3,
  colorAccentShade3: colorAccent1Shade3,
  colorAccentShade4: colorAccent1Shade4,
  colorAccentShade5: colorAccent1Shade5,
};

export const themeNight = {
  colorBackgroundShade1: colorDarkShade1,
  colorBackgroundShade2: colorDarkShade2,
  colorBackgroundShade3: colorDarkShade3,
  colorTextShade1: colorLightShade1,
  colorTextShade2: colorLightShade2,
  colorTextShade3: colorLightShade3,
  colorAccentShade3: colorAccent2Shade3,
  colorAccentShade4: colorAccent2Shade4,
  colorAccentShade5: colorAccent2Shade5,
};

export const themes: {
  [key in TypeTheme]: { [key: string]: string };
} = {
  day: themeDay,
  night: themeNight,
};

export const themesOpposite: {
  [key in TypeTheme]: TypeTheme;
} = {
  day: 'night',
  night: 'day',
};

export const themePropNameCSSMap = {
  colorBackgroundShade1: 'color-background--shade-1',
  colorBackgroundShade2: 'color-background--shade-2',
  colorBackgroundShade3: 'color-background--shade-3',
  colorTextShade1: 'color-text--shade-1',
  colorTextShade2: 'color-text--shade-2',
  colorTextShade3: 'color-text--shade-3',
  colorAccentShade3: 'color-accent--shade-3',
  colorAccentShade4: 'color-accent--shade-4',
  colorAccentShade5: 'color-accent--shade-5',
};

export const transitionTimeFast = 200;
export const transitionTimeBox = 400;
export const transitionTimeSlow = 800;
export const transitionTimingFunction = [0.25, 0.46, 0.45, 0.94];
