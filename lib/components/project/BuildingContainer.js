import { useState } from "react";
import { ModalTemplate } from "../modal";
import StyledButton from "../styledButton";
import { TableTemplateComponent } from "../table";
import BuildingForm from "./BuildingForm";
import Drawer from "../drawer";
import FloorForm from "./FloorForm";

export default function BuildingContainer() {
  const columns = [
    { header: "Building No.", key: "buildingName" },
    { header: "Project Name", key: "projectName" },
    { header: "No. of Floors", key: "floors" },
    {
      header: "Add floors",
      key: null,
      cell: () => (
        <StyledButton
          label="Add Floors"
          size="sm"
          onClick={() => {
            setIsFloorDrawerVisible(true);
          }}
        />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      buildingName: "Kingsburry-A",
      projectName: "Pride-Kingsburry",
      floors: 12,
    },
  ];

  const [isBuildingModalVisible, setIsBuildingModalVisible] = useState(false);
  const [isFloorDrawerVisible, setIsFloorDrawerVisible] = useState(false);

  return (
    <div className="w-full">
      <TableTemplateComponent
        columns={columns}
        hasCrudActions={true}
        onAdd={() => {
          setIsBuildingModalVisible(true);
        }}
        data={data}
      />
      <ModalTemplate
        isModalOpen={isBuildingModalVisible}
        closeModal={() => {
          setIsBuildingModalVisible(false);
        }}
        children={<BuildingForm />}
      />

      <Drawer
        open={isFloorDrawerVisible}
        onClose={() => {
          setIsFloorDrawerVisible(false);
        }}
        children={<FloorForm />}
      />
    </div>
  );
}
