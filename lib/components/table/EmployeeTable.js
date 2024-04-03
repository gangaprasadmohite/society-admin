"use client";

import { Checkbox } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyComponent from "../emptyComponent";
import EmployeeDrawer from "../modal/EmployeeModal";
import TableTemplateComponent from "./TableTemplateComponent";

function EmployeeTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
}) {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);

  onAdd = () => {
    setOpen(true);
  };

  const getEmployees = async () => {
    let response = await axios.get("http://localhost:5001/getresidents");
    setEmployees(response.data);
  };
  useEffect(() => {
    getEmployees();
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
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
            header: "Employee",
            key: "name",
          },
          {
            header: "Phone Number",
            key: "phone",
          },
          { header: "Email", key: "email" },
        ]}
        data={employees}
      />
      <EmployeeDrawer
        open={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />
      {!employees.length ? <EmptyComponent /> : null}
    </div>
  );
}

export default EmployeeTable;
