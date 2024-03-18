import {
  Button,
  FormHelperText,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";
import React from "react";

const PrintComplaintJobModal = ({ open = false, onClose = () => {} }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalDialog sx={{ padding: "2rem" }}>
          <ModalClose />
          <div>Worker name: worker 1</div>
          <div>Contact: 123456789</div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default PrintComplaintJobModal;
