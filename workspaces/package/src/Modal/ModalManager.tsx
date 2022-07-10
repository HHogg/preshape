import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { v4 } from 'uuid';

type ModalContextProps = {
  enableManagedModals: boolean;
  isModalVisible: (id: string) => boolean;
  registerVisibleModal: () => string;
  unregisterVisibleModal: (id: string) => void;
};

const ModalContext = createContext<ModalContextProps>({
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

export const useModalManagerContext = () => useContext(ModalContext);

const ModalManager = (props: PropsWithChildren<{}>) => {
  const [activeModalIds, setActiveModalIds] = useState<string[]>([]);

  const registerVisibleModal = () => {
    const id = v4();
    setActiveModalIds((ids) => [...ids, id]);
    return id;
  };

  const unregisterVisibleModal = (id: string) => {
    setActiveModalIds((ids) => ids.filter((activeId) => activeId !== id));
  };

  const isModalVisible = (id: string) => {
    return activeModalIds[activeModalIds.length - 1] === id;
  };

  return (
    <ModalContext.Provider
      {...props}
      value={{
        enableManagedModals: true,
        isModalVisible,
        registerVisibleModal,
        unregisterVisibleModal,
      }}
    />
  );
};

export default ModalManager;
