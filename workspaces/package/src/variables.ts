import color from 'open-color';
import { TypeTheme } from './types';

const hexToRGBA = (hex: string, a: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

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
export const sizeX24Px = sizeX1Px * 24;
export const sizeX32Px = sizeX1Px * 32;

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
export const sizeX24Rem = sizeX1Rem * 24;
export const sizeX32Rem = sizeX1Rem * 32;

export const borderSizeX1Px = 1;
export const borderSizeX2Px = 2;
export const borderSizeX3Px = 3;

export const borderSizeX1Rem = 0.0625;
export const borderSizeX2Rem = 0.125;
export const borderSizeX3Rem = 0.1875;

export const borderRadiusSizeX1Px = sizeX1Px;
export const borderRadiusSizeX2Px = sizeX2Px;
export const borderRadiusSizeX3Px = sizeX3Px;
export const borderRadiusSizeX4Px = sizeX4Px;
export const borderRadiusSizeX5Px = sizeX5Px;
export const borderRadiusSizeX6Px = sizeX6Px;

export const borderRadiusSizeX1Rem = sizeX1Rem;
export const borderRadiusSizeX2Rem = sizeX2Rem;
export const borderRadiusSizeX3Rem = sizeX3Rem;
export const borderRadiusSizeX4Rem = sizeX4Rem;
export const borderRadiusSizeX5Rem = sizeX5Rem;
export const borderRadiusSizeX6Rem = sizeX6Rem;

export const colorWhite = 'rgb(255, 255, 255)';
export const colorBlack = 'rgb(10, 10, 10)';

export const colorDarkShade1 = 'rgb(15, 20, 25)';
export const colorDarkShade2 = 'rgb(20, 25, 30)';
export const colorDarkShade3 = 'rgb(25, 30, 35)';

export const colorLightShade1 = 'rgb(245, 250, 255)';
export const colorLightShade2 = 'rgb(240, 245, 250)';
export const colorLightShade3 = 'rgb(235, 240, 245)';

export const colorAccent1Shade1 = hexToRGBA(color.indigo[7], 0.1);
export const colorAccent1Shade2 = hexToRGBA(color.indigo[7], 0.2);
export const colorAccent1Shade3 = color.indigo[5];
export const colorAccent1Shade4 = color.indigo[6];
export const colorAccent1Shade5 = color.indigo[7];

export const colorAccent2Shade1 = hexToRGBA(color.violet[7], 0.1);
export const colorAccent2Shade2 = hexToRGBA(color.violet[7], 0.2);
export const colorAccent2Shade3 = color.violet[5];
export const colorAccent2Shade4 = color.violet[6];
export const colorAccent2Shade5 = color.violet[7];

export const colorPositiveShade1 = hexToRGBA(color.teal[7], 0.1);
export const colorPositiveShade2 = hexToRGBA(color.teal[7], 0.2);
export const colorPositiveShade3 = color.teal[5];
export const colorPositiveShade4 = color.teal[6];
export const colorPositiveShade5 = color.teal[7];

export const colorNegativeShade1 = hexToRGBA(color.pink[7], 0.1);
export const colorNegativeShade2 = hexToRGBA(color.pink[7], 0.2);
export const colorNegativeShade3 = color.pink[5];
export const colorNegativeShade4 = color.pink[6];
export const colorNegativeShade5 = color.pink[7];

export const colorHighlight = color.yellow[2];

export type ThemeColorMapKey =
  | 'colorBackgroundShade1'
  | 'colorBackgroundShade2'
  | 'colorBackgroundShade3'
  | 'colorBackgroundShade4'
  | 'colorTextShade1'
  | 'colorTextShade2'
  | 'colorTextShade3'
  | 'colorAccentShade1'
  | 'colorAccentShade2'
  | 'colorAccentShade3'
  | 'colorAccentShade4'
  | 'colorAccentShade5';

export type ThemeColorMap = Record<ThemeColorMapKey, string>;

export const themeDay: ThemeColorMap = {
  colorBackgroundShade1: colorWhite,
  colorBackgroundShade2: colorLightShade1,
  colorBackgroundShade3: colorLightShade2,
  colorBackgroundShade4: colorLightShade3,
  colorTextShade1: colorBlack,
  colorTextShade2: 'rgb(70, 75, 80)',
  colorTextShade3: 'rgb(100, 105, 110)',
  colorAccentShade1: colorAccent1Shade1,
  colorAccentShade2: colorAccent1Shade2,
  colorAccentShade3: colorAccent1Shade3,
  colorAccentShade4: colorAccent1Shade4,
  colorAccentShade5: colorAccent1Shade5,
};

export const themeNight: ThemeColorMap = {
  colorBackgroundShade1: colorBlack,
  colorBackgroundShade2: colorDarkShade1,
  colorBackgroundShade3: colorDarkShade2,
  colorBackgroundShade4: colorDarkShade3,
  colorTextShade1: colorWhite,
  colorTextShade2: 'rgb(195, 200, 205)',
  colorTextShade3: 'rgb(155, 160, 165)',
  colorAccentShade1: colorAccent2Shade1,
  colorAccentShade2: colorAccent2Shade2,
  colorAccentShade3: colorAccent2Shade3,
  colorAccentShade4: colorAccent2Shade4,
  colorAccentShade5: colorAccent2Shade5,
};

export const themes: Record<TypeTheme, ThemeColorMap> = {
  day: themeDay,
  night: themeNight,
};

export const themesOpposite: Record<TypeTheme, TypeTheme> = {
  day: 'night',
  night: 'day',
};

export const themePropNameCSSMap: ThemeColorMap = {
  colorBackgroundShade1: 'color-background-shade-1',
  colorBackgroundShade2: 'color-background-shade-2',
  colorBackgroundShade3: 'color-background-shade-3',
  colorBackgroundShade4: 'color-background-shade-4',
  colorTextShade1: 'color-text-shade-1',
  colorTextShade2: 'color-text-shade-2',
  colorTextShade3: 'color-text-shade-3',
  colorAccentShade1: 'color-accent-shade-1',
  colorAccentShade2: 'color-accent-shade-3',
  colorAccentShade3: 'color-accent-shade-3',
  colorAccentShade4: 'color-accent-shade-4',
  colorAccentShade5: 'color-accent-shade-5',
};

export const transitionTimeFast = 200;
export const transitionTimeBox = 400;
export const transitionTimeSlow = 800;
export const transitionTimingFunction = [0.25, 0.46, 0.45, 0.94];
