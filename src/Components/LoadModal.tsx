import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import React from "react";
import { setItems } from "../redux/slices/currentOrderSlice";
import { getCurrentConfigOrder } from "../redux/slices/utils";
import { update } from "../redux/slices/ConfigOrderSlice";

type props = {
  show: boolean;
  handleClose: () => void;
};

function LoadModal({ show, handleClose }: props) {
  const dispatch = useAppDispatch();

  const inputRef = React.createRef<HTMLInputElement>();

  const submitHandler = () => {
    const token: string = inputRef.current?.value || "";
    if (token === "") {
      alert("Input filed is empty.");
      return;
    }

    const items = getCurrentConfigOrder(token);

    dispatch(setItems(items));

    dispatch(update({ token: token }));

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Load a pizza using a configuration number:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex gap-3 p-4">
          <Form.Control ref={inputRef}></Form.Control>
          <Button onClick={submitHandler}>Submit</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoadModal;
