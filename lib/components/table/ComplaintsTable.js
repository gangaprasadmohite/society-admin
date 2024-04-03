"use client";

import { Button, Checkbox, Chip, IconButton } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignComplaintModal from "../modal/AssignComplaintModal";
import PrintComplaintJobModal from "../modal/PrintComplaintJobModal";
import TableTemplateComponent from "./TableTemplateComponent";
import ModalTemplate from "../modal/ModalTemplate";
import AssignWorkerForm from "../assignWorkerForm";
import PrintIcon from "@mui/icons-material/Print";
import StyledButton from "../styledButton";

function ComplaintsTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [complaints, setComplaints] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPrintDialog, setOpenPrintDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const [selectedComplaints, setSelectedComplaints] = useState([]);

  onAdd = (row, index) => () => {
    setOpen(true);
    setCurrentIndex(index);
  };

  // const getComplaints = async () => {
  //   let response = await axios.get("http://localhost:5001/getcomplaints");
  //   setComplaints(response.data);
  // };
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

  console.log(selectedComplaints);
  return (
    <>
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
              <IconButton variant="soft">
                <PrintIcon />
              </IconButton>
            ),
          },
        ]}
        data={complaints}
      />
      <div className="flex justify-end">
        <StyledButton label="Mark as Complete" onClick={handleSubmit} />
      </div>

      {/* <AssignComplaintModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        showJobDialog={showJobDialog}
        handleSelect={handleSelect}
      /> */}

      <ModalTemplate
        isModalOpen={open}
        closeModal={() => {
          setOpen(false);
        }}
        children={<AssignWorkerForm onChange={handleSelect} />}
      />

      <PrintComplaintJobModal
        open={openPrintDialog}
        onClose={closePrintDialog}
      />
    </>
  );

  // return (
  //   <TableContainer
  //     sx={{
  //       borderRadius: "5px",
  //       backgroundColor: "white",
  //       borderBottom: "1px solid #ccc",
  //       borderLeft: "1px solid #ccc",
  //       borderRight: "1px solid #ccc",
  //       marginTop: "20px",
  //     }}
  //   >
  //     <Table sx={{ minWidth: 700 }} size="small">
  //       <TableHead
  //       // className="background-color-light"
  //       >
  //         <TableRow>
  //           <StyledTableCell sx={{ fontWeight: "bold" }}>
  //             Client Name
  //           </StyledTableCell>
  //           <StyledTableCell sx={{ fontWeight: "bold" }}>
  //             Client Description
  //           </StyledTableCell>

  //           <StyledTableCell>
  //             <div style={{ display: "flex", justifyContent: "flex-end" }}>
  //               <StyledIconButton icon={<AddIcon />} onClick={onAdd} />
  //             </div>
  //           </StyledTableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {clients.map((client, index) => (
  //           <StyledTableRow key={client.id} sx={{ height: "35px" }}>
  //             <StyledTableCell scope="row">{client.name}</StyledTableCell>
  //             <StyledTableCell scope="row">
  //               {client.description}
  //             </StyledTableCell>

  //             <StyledTableCell>
  //               <div
  //                 style={{
  //                   display: "flex",
  //                   justifyContent: "flex-end",
  //                 }}
  //               >
  //                 <EditIcon
  //                   sx={{
  //                     marginRight: "10px",
  //                     marginLeft: "10px",
  //                     color: "blue",
  //                     cursor: "pointer",
  //                     height: "18px",
  //                   }}
  //                   onClick={onEdit(index)}
  //                 />

  //                 <DeleteIcon
  //                   sx={{
  //                     color: "red",
  //                     cursor: "pointer",
  //                     height: "18px",
  //                   }}
  //                   onClick={onDelete(index)}
  //                 />
  //               </div>
  //             </StyledTableCell>
  //           </StyledTableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //     {isLoading ? (
  //       <TableLoader />
  //     ) : !clients.length ? (
  //       <EmptyComponent />
  //     ) : null}
  //   </TableContainer>
  // );
}

export default ComplaintsTable;
