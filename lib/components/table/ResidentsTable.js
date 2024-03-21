"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ReisdentModal from "../modal/ResidentModal";
import TableTemplateComponent from "./TableTemplateComponent";

function ResidentsTable({
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

  onAdd = () => {
    setOpen(true);
  };

  return (
    <>
      <TableTemplateComponent
        hasCrudActions={true}
        columns={[
          {
            header: "Phone No.",
            key: "phone",
          },
          { header: "Name", key: "name" },
          { header: "Society", key: "society" },
          { header: "Email ID", key: "email" },
          { header: "Unit No.", key: "unit" },
        ]}
        data={residents}
      />
      <ReisdentModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default ResidentsTable;
