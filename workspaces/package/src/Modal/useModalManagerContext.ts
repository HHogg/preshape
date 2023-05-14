import { createContext, useContext } from 'react';

type ModalManagerContextProps = {
  enableManagedModals: boolean;
  isModalVisible: (id: string) => boolean;
  registerVisibleModal: () => string;
  unregisterVisibleModal: (id: string) => void;
};

export const ModalManagerContext = createContext<ModalManagerContextProps>({
  enableManagedModals: false,
  isModalVisible: () => false,
  registerVisibleModal: () => {
    throw new Error(
      'To use managed modal visibility, you must wrap a ModalManager around your app'
    );
  },
  unregisterVisibleModal: () => {
    throw new Error(
      'To use managed modal visibility, you must wrap a ModalManager around your app'
    );
  },
});

export const useModalManagerContext = () => useContext(ModalManagerContext);
