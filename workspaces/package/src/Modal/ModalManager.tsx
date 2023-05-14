import { PropsWithChildren, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { ModalManagerContext } from './useModalManagerContext';

export const ModalManager = (props: PropsWithChildren<{}>) => {
  const [activeModalIds, setActiveModalIds] = useState<string[]>([]);

  const registerVisibleModal = useCallback(() => {
    const id = v4();
    setActiveModalIds((ids) => [...ids, id]);
    return id;
  }, []);

  const unregisterVisibleModal = useCallback((id: string) => {
    setActiveModalIds((ids) => ids.filter((activeId) => activeId !== id));
  }, []);

  const isModalVisible = (id: string) => {
    return activeModalIds[activeModalIds.length - 1] === id;
  };

  return (
    <ModalManagerContext.Provider
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
