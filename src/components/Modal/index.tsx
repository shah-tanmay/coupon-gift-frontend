import { PropsWithChildren } from "react";
import Modal from "react-modal";
import useWindowSize from "../hooks/useWindowSize";

export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const CustomModal = ({
  children,
  isOpen,
  closeModal,
}: PropsWithChildren<ModalProps>) => {
  const { width } = useWindowSize();
  const customStyles = {
    content: {
      top: `${width! <= 768 ? "86%" : "50%"}`,
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
      border: "5px solid #00e5c9",
      borderBottom: `${width! <= 768 ? "0px" : "5px solid #000e5c9"}`,
      width: `${width! <= 768 ? "100%" : ""}`,
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {children}
    </Modal>
  );
};

export default CustomModal;
