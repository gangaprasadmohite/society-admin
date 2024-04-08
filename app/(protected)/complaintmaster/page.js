"use client";

import { AssignWorkerForm } from "@/lib/components/complaint";
import { ModalTemplate } from "@/lib/components/modal";
import PageHeader from "@/lib/components/pageHeader";
import StyledButton from "@/lib/components/styledButton";
import { TableTemplateComponent } from "@/lib/components/table";
import PrintIcon from "@mui/icons-material/Print";
import { Checkbox, Chip, IconButton } from "@mui/joy";
import { useEffect, useState } from "react";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPrintDialog, setOpenPrintDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const [selectedComplaints, setSelectedComplaints] = useState([]);

  let data = [
    {
      id: 1,
      name: "Abhijeet",
      society: "Society 1",
      building: "Building 1",
      flat: "101",
      type: "Electricity",
      description: "Voltage fluctuation",
      status: "Pending",
      worker: "Worker 1",
      complaint: "Complaint 1",
      isChecked: false,
    },
    {
      id: 2,
      name: "Raj",
      society: "Society 2",
      building: "Building 2",
      flat: "101",
      type: "Plumbing",
      description: "Sink clot",
      status: "Pending",
      worker: "Worker 2",
      complaint: "Complaint 2",
      isChecked: false,
    },
    {
      id: 3,
      name: "Gaurav",
      society: "Society 3",
      building: "Building 3",
      flat: "101",
      type: "Carpentry",
      description: "Door Hinges issue",
      status: "Completed",
      worker: "Worker 3",
      complaint: "Complaint 3",
      isChecked: false,
    },
    {
      id: 4,
      name: "Vedant",
      society: "Society 4",
      building: "Building 4",
      flat: "101",
      type: "Electricity",
      description: "Switch replacement",
      status: "Pending",
      worker: "Worker 4",
      complaint: "Complaint 4",
      isChecked: false,
    },
    {
      id: 5,
      name: "Ameya",
      society: "Society 5",
      building: "Building 5",
      flat: "101",
      type: "Pest Control",
      description: "Pest Control",
      status: "Completed",
      worker: "Worker 5",
      complaint: "Complaint 5",
      isChecked: false,
    },
  ];

  const onAdd = (row, index) => () => {
    setOpen(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    setComplaints(data);
  }, []);

  const printJob = () => {};

  const showJobDialog = () => {
    setOpen(false);
    setOpenPrintDialog(true);
    // printJob();
  };

  const closePrintDialog = () => {
    setOpenPrintDialog(false);
  };

  const handleSelect = (newValue) => {
    let temp = [...complaints];
    temp[currentIndex].worker = newValue.name;
    setComplaints(temp);
  };

  const handleChange = (index) => (event) => {
    let rowIndexes = [...selectedComplaints];
    let tempStatus = [...complaints];
    let currentRow = tempStatus[index];

    currentRow.isChecked = event.target.checked;

    if (currentRow.isChecked) {
      rowIndexes.push(currentRow.id);
    } else {
      let index = rowIndexes.indexOf(currentRow.id);

      if (index >= 0) {
        rowIndexes.splice(index, 1);
      }
    }
    setSelectedComplaints(rowIndexes);
  };

  const handleSubmit = () => {
    if (selectedComplaints.length) {
      let tempComplaints = [...complaints];

      tempComplaints.forEach((complaint) => {
        let index = selectedComplaints.indexOf(complaint.id);
        if (index > -1) {
          complaint.status = "Completed";
          complaint.isChecked = false;
        }
      });

      setComplaints(tempComplaints);
    }
  };

  return (
    <>
      <PageHeader pageTitle="Complaints" backPath="/dashboard" />
      <div>
        <TableTemplateComponent
          hasCrudActions={false}
          columns={[
            {
              header: "",
              key: null,
              headerStyle: { width: "5%" },
              cell: (row, index) => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Checkbox
                    size="sm"
                    onChange={handleChange(index)}
                    checked={row.isChecked}
                    disabled={row.status === "Completed"}
                  />
                </div>
              ),
            },
            {
              header: "Name",
              key: "name",
            },
            {
              header: "Society",
              key: "society",
            },
            { header: "Building", key: "building" },
            { header: "Flat", key: "flat" },
            { header: "Type", key: "type" },
            { header: "Description", key: "description" },
            {
              header: "Status",
              key: "status",
              cell: (rowData) => (
                <Chip
                  color={rowData.status == "Completed" ? "success" : "warning"}
                >
                  {rowData.status}
                </Chip>
              ),
            },
            { header: "Worker Assigned", key: "worker" },
            {
              header: "Assign Worker",
              key: null,
              cell: (row, index) => (
                <div
                  className="buttonParentDiv"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton
                    label="Assign"
                    onClick={onAdd(row, index)}
                    size="sm"
                  />
                </div>
              ),
            },
            {
              header: "Print",
              key: "",
              cell: (rowData) => (
                <IconButton variant="soft" size="sm">
                  <PrintIcon />
                </IconButton>
              ),
            },
          ]}
          data={complaints}
        />
      </div>
      <div className="flex justify-end">
        <StyledButton label="Mark as Complete" onClick={handleSubmit} />
      </div>

      <ModalTemplate
        isModalOpen={open}
        closeModal={() => {
          setOpen(false);
        }}
        children={<AssignWorkerForm onChange={handleSelect} />}
      />
    </>
  );
};

export default Complaints;
