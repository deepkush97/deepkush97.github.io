import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

export interface ModalWrapperProps {
  show: boolean;
  onHide: () => void;
  modalId: string;
  title: string;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  show,
  onHide,
  modalId,
  title,
  children,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby={modalId}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id={modalId}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
