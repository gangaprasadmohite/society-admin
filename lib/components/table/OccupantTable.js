"use client";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Table } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyComponent from "../emptyComponent";
import EmployeeModal from "../modal/EmployeeModal";
import TableTemplateComponent from "./TableTemplateComponent";
import { Checkbox } from "@mui/material";
function OccupantTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [occupants, setOccupants] = useState([]);
  const [open, setOpen] = useState(false);

  onAdd = () => {
    setOpen(true);
  };

  const getOccupants = async () => {
    let response = await axios.get("http://localhost:5001/getOccupant");
    setOccupants(response.data);
  };
  useEffect(() => {
    getOccupants();
  }, []);

  onAdd = () => {
    setOpen(true);
  };

  return (
    <div className="border border-solid border-grey-500">
      <TableTemplateComponent
        hasCrudActions={true}
        onAdd={onAdd}
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
            header: "Occupant",
            key: "name",
          },
          {
            header: "Date Of Birth",
            key: "dob",
          },
          { header: "Gender", key: "gender" },
          { header: "Nationality", key: "nationality" },
          { header: "Email", key: "email" },
          { header: "Phone", key: "phone" },
          // {
          //   header: "Action",
          //   key: null,
          //   cell: () => (
          //     <div
          //       className="buttonParentDiv"
          //       style={{ display: "flex", justifyContent: "center" }}
          //     >
          //       <Button
          //         size="xs"
          //         variant="plain"
          //         color="neutral"
          //         // onClick={onEdit(index)}
          //         sx={{ marginRight: "5px" }}
          //       >
          //         <EditIcon />
          //       </Button>
          //       <Button
          //         size="xs"
          //         variant="soft"
          //         color="danger"
          //         // onClick={onDelete(index)}
          //       >
          //         <DeleteIcon />
          //       </Button>
          //     </div>
          //   ),
          // },
        ]}
        data={occupants}
      />
      {/* <Table borderAxis="both" size="md" className="rounded-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Nationality</th>

            <th style={{ width: "15%" }}>
              <div className="flex flex-row justify-center px-2">
                <Button
                  size="xs"
                  variant="soft"
                  color="neutral"
                  onClick={onAdd}
                >
                  <AddIcon />
                </Button>
              </div>
            </th>
          </tr>
          {occupants.map((occupant) => (
            <tr>
              <td>{occupant.name}</td>
              <td>{occupant.dob}</td>
              <td>{occupant.gender}</td>
              <td>{occupant.nationality}</td>
              <td style={{ width: "20%" }}>
                <div className="flex flex-row justify-end">
                  <Button
                    size="xs"
                    variant="plain"
                    color="neutral"
                    // onClick={onEdit(index)}
                    sx={{ marginRight: "5px" }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    size="xs"
                    variant="soft"
                    color="danger"
                    // onClick={onDelete(index)}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </thead>
       
      </Table> */}
      <EmployeeModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      {!occupants.length ? <EmptyComponent /> : null}
    </div>
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

export default OccupantTable;
