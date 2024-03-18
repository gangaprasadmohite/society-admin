"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { StyledTableCell, StyledTableRow } from "../../styles/tableStyles";
import EmptyComponent from "../emptyComponent";
import StyledIconButton from "../styledIconButton";
import TableLoader from "../tableLoader";
import { Button, Checkbox, IconButton, Sheet, Table } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignComplaintModal from "../modal/AssignComplaintModal";
import PrintComplaintJobModal from "../modal/PrintComplaintJobModal";

function ComplaintsTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [residents, setResidents] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPrintDialog, setOpenPrintDialog] = useState(false);

  onAdd = () => {
    setOpen(true);
  };

  const getResidents = async () => {
    let response = await axios.get("http://localhost:5001/getresidents");
    setResidents(response.data);
  };

  useEffect(() => {
    getResidents();
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
      <div>
        <div className="border border-solid border-grey-500">
          <Table borderAxis="both" size="md">
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

                <th style={{ width: "10%" }}>
                  <div className="flex flex-row justify-center px-2">
                    {/* <Button
                  size="sm"
                  variant="soft"
                  color="neutral"
                  onClick={onAdd}
                > */}
                    {/* <AddIcon /> */}
                    Assign worker
                    {/* </Button> */}
                  </div>
                </th>
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
                  <td className="text-center">
                    <Button
                      onClick={onAdd}
                      disabled={index == 2 || index == 5 ? false : true}
                    >
                      Assign
                    </Button>
                  </td>
                </tr>
              ))}
              {/* {clients.map((client, index) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.description}</td>
              <td>
                <div className="flex flex-row justify-end">
                  <Button
                    size="sm"
                    variant="plain"
                    color="neutral"
                    onClick={onEdit(index)}
                    sx={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="danger"
                    onClick={onDelete(index)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))} */}
            </tbody>
          </Table>

          {!residents.length ? <EmptyComponent /> : null}
        </div>
        <Button style={{ marginTop: "1rem", float: "right" }}>
          Mark selected complaints as completed
        </Button>
      </div>

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
