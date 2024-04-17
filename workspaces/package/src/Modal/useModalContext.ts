import { createContext, useContext, PointerEvent } from 'react';
import { TypeBorderSize, TypeColor, TypeSize } from '../types';

export const ModalContext = createContext<{
  onClose?: (event: PointerEvent<HTMLElement>) => void;
  borderColor: TypeColor;
  borderSize: TypeBorderSize;
  paddingHorizontal: TypeSize;
  paddingVertical: TypeSize;
}>({
  borderColor: 'background-shade-3',
  borderSize: 'x1',
  paddingHorizontal: 'x8',
  paddingVertical: 'x6',
});

export const useModalContext = () => useContext(ModalContext);
