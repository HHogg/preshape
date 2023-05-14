import { createContext, useContext, PointerEvent } from 'react';
import { TypeSize } from '../types';

export type ModalSize = 'x1' | 'x2' | 'x3';

export const ModalPaddings: Record<
  ModalSize,
  {
    horizontal: TypeSize;
    vertical: TypeSize;
  }
> = {
  x1: {
    horizontal: 'x8',
    vertical: 'x4',
  },
  x2: {
    horizontal: 'x8',
    vertical: 'x6',
  },
  x3: {
    horizontal: 'x12',
    vertical: 'x10',
  },
};

export const ModalContext = createContext<{
  onClose?: (event: PointerEvent<HTMLElement>) => void;
  paddingHorizontal: TypeSize;
  paddingVertical: TypeSize;
}>({
  paddingHorizontal: ModalPaddings.x2.horizontal,
  paddingVertical: ModalPaddings.x2.vertical,
});

export const useModalContext = () => useContext(ModalContext);
