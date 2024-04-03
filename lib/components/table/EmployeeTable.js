"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton, Table } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyComponent from "../emptyComponent";
import EmployeeDrawer from "../modal/EmployeeModal";

function EmployeeTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [residents, setResidents] = useState([]);
  const [open, setOpen] = useState(false);

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

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div className="border border-solid border-grey-500">
      <Table borderAxis="both" size="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Email ID</th>

            <th style={{ width: "10%" }}>
              <div className="flex flex-row justify-center px-2">
                <Button
                  size="sm"
                  variant="soft"
                  color="neutral"
                  onClick={onAdd}
                >
                  <AddIcon />
                </Button>
              </div>
            </th>
          </tr>
          {residents.map((resident) => (
            <tr>
              <td>{resident.name}</td>
              <td>{resident.phone}</td>
              <td>{resident.email}</td>
              <td className="text-center ">
                <IconButton onClick={onAdd}>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon color="error" />
                </IconButton>
              </td>
            </tr>
          ))}
        </thead>
      </Table>
      <EmployeeDrawer
        open={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />
      {!residents.length ? <EmptyComponent /> : null}
    </div>
  );
}

export default EmployeeTable;
