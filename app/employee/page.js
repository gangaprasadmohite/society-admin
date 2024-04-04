"use client";

import Drawer from "@/lib/components/drawer";
import { EmployeeForm } from "@/lib/components/employee";
import { TableTemplateComponent } from "@/lib/components/table";
import axios from "axios";
import { useEffect, useState } from "react";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);

  const onAdd = () => {
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
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        children={<EmployeeForm />}
      />
    </div>
  );
}

export default Employee;
