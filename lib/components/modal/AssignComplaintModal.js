import {
  Button,
  FormHelperText,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
} from "@mui/joy";
import React, { useState } from "react";

const AssignComplaintModal = ({
  open = false,
  onClose = () => {},
  showJobDialog = () => {},
  handleSelect = () => {},
}) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalDialog sx={{ padding: "2rem" }}>
          <ModalClose />
          <FormHelperText sx={{ marginBottom: "-0.5rem" }}>
            Assign worker
          </FormHelperText>
          {/* <Input
            sx={{ marginBottom: "1rem", width: "30rem" }}
            placeholder="Select worker"
          /> */}

          <Select
            placeholder="Choose worker..."
            className="w-auto"
            onChange={handleSelect}
          >
            <Option value="worker1">worker 1</Option>
            <Option value="worker2">worker 2</Option>
            <Option value="worker3">worker 3</Option>
            <Option value="worker4">worker 4</Option>
          </Select>

          <Button onClick={showJobDialog}>Assign worker</Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AssignComplaintModal;
