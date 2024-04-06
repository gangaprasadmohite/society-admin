"use client";

import Drawer from "@/lib/components/drawer";
import { EmployeeForm } from "@/lib/components/employee";
import PageHeader from "@/lib/components/pageHeader";
import { TableTemplateComponent } from "@/lib/components/table";
import { useEffect, useState } from "react";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);

  const onAdd = () => {
    setOpen(true);
  };

  const getEmployees = async () => {
    setEmployees([
      {
        id: 1,
        name: "name 1",
        phone: "phone 1",
        email: "email 1",
        society: "society 1",
        unit: "unit 1",
      },
      {
        id: 2,
        name: "name 2",
        phone: "phone 2",
        email: "email 2",
        society: "society 2",
        unit: "unit 2",
      },
      {
        id: 3,
        name: "name 3",
        phone: "phone 3",
        email: "email 3",
        society: "society 3",
        unit: "unit 3",
      },
      {
        id: 4,
        name: "name 4",
        phone: "phone 4",
        email: "email 4",
        society: "society 4",
        unit: "unit 4",
      },
      {
        id: 5,
        name: "name 5",
        phone: "phone 5",
        email: "email 5",
        society: "society 5",
        unit: "unit 5",
      },
      {
        id: 6,
        name: "name 6",
        phone: "phone 6",
        email: "email 6",
        society: "society 6",
        unit: "unit 6",
      },
    ]);
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
      <PageHeader pageTitle="Employees" backPath="/" />
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
          idProperty="id"
        />
      </div>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        children={<EmployeeForm />}
      />
    </div>
  );
}

export default Employee;
