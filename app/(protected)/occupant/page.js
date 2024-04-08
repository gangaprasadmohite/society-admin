"use client";

import Drawer from "@/lib/components/drawer";
import { OccupantForm } from "@/lib/components/occupant";
import PageHeader from "@/lib/components/pageHeader";
import { TableTemplateComponent } from "@/lib/components/table";
import { useEffect, useState } from "react";

const page = () => {
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

  const onAdd = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <PageHeader pageTitle="Occupants" backPath="/dashboard" />

      <div>
        <Drawer
          children={<OccupantForm />}
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
      </div>
    </div>
  );
};

export default page;
