import { useCallback, useState } from "react";

export default () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsShowingModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowingModal(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsShowingModal(!isShowingModal);
  }, []);

  return {
    isShowingModal,
    handleOpenModal,
    handleCloseModal,
    toggleModal
  };
};
