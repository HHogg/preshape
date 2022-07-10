import { useEffect, useMemo } from "react";
import { useModalManagerContext } from "./ModalManager";

const useIsModalVisible = (visible: boolean) => {
  const { enableManagedModals, isModalVisible, registerVisibleModal, unregisterVisibleModal } = useModalManagerContext();

  const uid = useMemo(() => {
    if (enableManagedModals && visible) {
      return registerVisibleModal()
    }
  }, [enableManagedModals, visible]);

  useEffect(() => {
    return () => {
      if (uid) {
        unregisterVisibleModal(uid);
      }
    };
  }, [uid]);


  return visible && (!uid || isModalVisible(uid));
};

export default useIsModalVisible;
