"use client";

import { Button, Checkbox } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignComplaintModal from "../modal/AssignComplaintModal";
import PrintComplaintJobModal from "../modal/PrintComplaintJobModal";
import TableTemplateComponent from "./TableTemplateComponent";

function ComplaintsTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [complaints, setComplaints] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPrintDialog, setOpenPrintDialog] = useState(false);

  onAdd = () => {
    setOpen(true);
  };

  const getComplaints = async () => {
    let response = await axios.get("http://localhost:5001/getcomplaints");
    setComplaints(response.data);
  };

  useEffect(() => {
    getComplaints();
  }, []);

  onAdd = () => {
    setOpen(true);
  };

  const printJob = () => {
    debugger;
  };

  const showJobDialog = () => {
    setOpen(false);
    setOpenPrintDialog(true);
    // printJob();
  };

  const closePrintDialog = () => {
    setOpenPrintDialog(false);
  };

  return (
    <>
      <TableTemplateComponent
        hasCrudActions={false}
        columns={[
          {
            header: "",
            key: null,
            headerStyle: { width: "5%" },
            cell: () => (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Checkbox size="sm" />
              </div>
            ),
          },
          {
            header: "Complaintant",
            key: "complaintant",
          },
          {
            header: "Complaint",
            key: "complaint",
          },
          { header: "Phone No.", key: "phone" },
          { header: "Society", key: "society" },
          { header: "Unit No.", key: "unit" },
          { header: "Worker Assigned", key: "worker" },
          {
            header: "Assign Worker",
            key: null,
            cell: () => (
              <div
                className="buttonParentDiv"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button onClick={onAdd} size="sm">
                  Assign
                </Button>
              </div>
            ),
          },
        ]}
        data={complaints}
      />

      {/* <div
        className="overflow-auto border border-solid border-grey-500 border-2 m-4"
        style={{ borderRadius: "15px" }}
      >
        <div style={{ minWidth: "800px" }}>
          <Table borderAxis="bothBetween" size="md" sx={{ minWidth: "800px" }}>
            <thead>
              <tr>
                <th style={{ width: "5%" }}></th>

                <th>Complainant</th>
                <th>Phone No.</th>
                <th className="" style={{ width: "35%" }}>
                  Complaint
                </th>
                <th>Society</th>
                <th>Unit No.</th>
                <th>Worker assigned</th>

                <th style={{ width: "100px" }}>Assign worker</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident, index) => (
                <tr>
                  <td className="text-center">
                    <Checkbox size="sm" />
                  </td>

                  <td>{resident.name}</td>
                  <td>{resident.phone}</td>
                  <td>{`Complainant ${index}`}</td>
                  <td>{resident.society}</td>
                  <td>{resident.unit}</td>
                  <td>{!(index == 2 || index == 5) && `worker ${index}`}</td>
                  <td className="text-center" style={{ minWidth: "80px" }}>
                    <Button
                      onClick={onAdd}
                      size="sm"
                      disabled={index == 2 || index == 5 ? false : true}
                    >
                      Assign
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {!residents.length ? <EmptyComponent /> : null}
        </div>
      </div> */}
      <Button
        style={{ marginTop: "1rem", float: "right", marginRight: "1rem" }}
      >
        Mark selected complaints as completed
      </Button>

      <AssignComplaintModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        showJobDialog={showJobDialog}
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
