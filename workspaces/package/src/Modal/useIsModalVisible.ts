import { useEffect, useState } from 'react';
import { useModalManagerContext } from './useModalManagerContext';

const useIsModalVisible = (visible: boolean) => {
  const {
    enableManagedModals,
    isModalVisible,
    registerVisibleModal,
    unregisterVisibleModal,
  } = useModalManagerContext();
  const [uid, setUid] = useState<string>();

  useEffect(() => {
    let uid: string;

    if (enableManagedModals && visible) {
      setUid((uid = registerVisibleModal()));
    }

    return () => {
      if (uid) {
        unregisterVisibleModal(uid);
      }
    };
  }, [
    registerVisibleModal,
    unregisterVisibleModal,
    enableManagedModals,
    visible,
  ]);

  return visible && (!uid || isModalVisible(uid));
};

export default useIsModalVisible;
