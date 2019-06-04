import React from "react";

import RootStore from "@/stores/RootStore";
import { Provider } from "@/utils/Contexts/RootContext";

import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";

import Modal from "@/components/atoms/Modal";
import Form from "@/components/organisms/ToDo/Form";

import useModal from "@/utils/hooks/useModal";

export default () => {
  const {
    isShowingModal,
    handleOpenModal,
    handleCloseModal,
    toggleModal
  } = useModal();

  return (
    <Provider value={new RootStore()}>
      <Header handleOpenModal={handleOpenModal} />
      <Main />
      <Modal isShowing={isShowingModal}>
        <Form
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          toggleModal={toggleModal}
        />
      </Modal>
    </Provider>
  );
};
