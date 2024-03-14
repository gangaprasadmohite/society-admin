import {
  Button,
  FormHelperText,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";
import React from "react";

const ResidentModal = ({ open = false, onClose = () => {} }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalDialog sx={{ padding: "2rem" }}>
          <ModalClose />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>Name</FormHelperText>
          <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Name"
          />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>
            Phone no.
          </FormHelperText>
          <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Phone no."
          />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>
            Email
          </FormHelperText>
          <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Email ID"
          />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>
            Society
          </FormHelperText>
          <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Society"
          />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>Unit</FormHelperText>
          <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Unit  "
          />

          <Button onClick={onClose}>Add Resident</Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ResidentModal;
