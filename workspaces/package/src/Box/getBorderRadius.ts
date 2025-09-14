import { TypeBorderRadius } from '../types';

export const getBorderRadius = (borderRadius?: TypeBorderRadius) => {
  const isPredefinedBorderRadius =
    borderRadius === 'full' ||
    borderRadius === 'x1' ||
    borderRadius === 'x2' ||
    borderRadius === 'x3' ||
    borderRadius === 'x4' ||
    borderRadius === 'x5' ||
    borderRadius === 'x6';

  return {
    predefinedBorderRadius: isPredefinedBorderRadius ? borderRadius : undefined,
    computedBorderRadius: isPredefinedBorderRadius ? undefined : borderRadius,
  };
};
