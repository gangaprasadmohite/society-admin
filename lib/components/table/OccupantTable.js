"use client";

import { Checkbox } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import EmptyComponent from "../emptyComponent";
import EmployeeModal from "../modal/EmployeeModal";
import TableTemplateComponent from "./TableTemplateComponent";
import OccupantModal from "../modal/OccupantModal";
function OccupantTable({
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isLoading = false,
  data,
}) {
  const [occupants, setOccupants] = useState([]);
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const getOccupants = async () => {
  //   let response = await axios.get("http://localhost:5001/getOccupant");
  //   setOccupants(response.data);
  // };

  useEffect(() => {
    setOccupants([
      {
        id: 1,
        name: "Avdhoot",
        dob: "01/20/1999",
        gender: "male",
        nationality: "Indian",
        address: "A-201 Kumar pride 1, Pune",
        email: "avd@gmail.com",
        phone: "8798998877",
      },
      {
        id: 2,
        name: "Avdhoot",
        dob: "01/20/1999",
        gender: "male",
        nationality: "Indian",
        address: "A-201 Kumar pride 1, Pune",
        email: "avd@gmail.com",
        phone: "8798998877",
      },
      {
        id: 3,
        name: "Avdhoot",
        dob: "01/20/1999",
        gender: "male",
        nationality: "Indian",
        address: "A-201 Kumar pride 1, Pune",
        email: "avd@gmail.com",
        phone: "8798998877",
      },
    ]);
  }, []);

  onAdd = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Drawer
        children={<OccupantModal />}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      />
      <TableTemplateComponent
        hasCrudActions={true}
        onAdd={onAdd}
        columns={[
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
        ]}
        data={occupants}
      />

      <EmployeeModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      {!occupants.length ? <EmptyComponent /> : null}
    </div>
  );
}

export default OccupantTable;
