import { useEffect, useState } from 'react';
import { useModalManagerContext } from './ModalManager';

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
  }, [enableManagedModals, visible]);

  return visible && (!uid || isModalVisible(uid));
};

export default useIsModalVisible;
