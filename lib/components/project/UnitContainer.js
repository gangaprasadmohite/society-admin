import React, { useState } from "react";
import { TableTemplateComponent } from "../table";
import { ModalTemplate } from "../modal";
import UnitForm from "./UnitForm";

export default function UnitContainer() {
  const columns = [
    {
      header: "Unit Number",
      key: "unitNumber",
    },
    {
      header: "Unit Name",
      key: "unitName",
    },
  ];

  const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);

  return (
    <div className="w-full">
      <TableTemplateComponent
        columns={columns}
        hasCrudActions={true}
        onAdd={() => {
          setIsUnitModalVisible(true);
        }}
        data={[]}
      />
      <ModalTemplate
        isModalOpen={isUnitModalVisible}
        closeModal={() => {
          setIsUnitModalVisible(false);
        }}
        children={<UnitForm />}
      />
    </div>
  );
}
