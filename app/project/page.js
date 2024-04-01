"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Checkbox, Drawer, IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import Select from "@/lib/components/select";
import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import { produce } from "immer";
import TableTemplateComponent from "@/lib/components/table/TableTemplateComponent";
import { UnitModal } from "@/lib/components/modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const columns = [
  {
    header: "Unit",
    key: "unit",
  },
  {
    header: "Number",
    key: "number",
  },
];

export default function Project() {
  const ROUTER = useRouter();

  const [agreed, setAgreed] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleModeChange = (e) => {
    setIsEditMode(!isEditMode);
  };

  const [project, setProject] = useState({
    projectType: null,
  });

  const [projectTypes, setProjectTypes] = useState([
    { id: 1, name: "Residential" },
    { id: 2, name: "Commercial" },
    { id: 3, name: "Industrial" },
    { id: 4, name: "Mixed use" },
  ]);

  const [amenities, setAmenities] = useState([
    { id: 1, name: "Swimming Pool" },
    { id: 2, name: "Gym" },
    { id: 3, name: "Tennis court" },
  ]);

  const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);

  const handleChange = (name) => (event) => {
    // console.log(project);
    let nextState = produce(project, (draft) => {
      switch (name) {
        case "projectType":
          draft[name] = event;
          draft["type"] = "";
          break;

        case "type":
          draft[name] = event.target.value;
          break;

        default:
          break;
      }
    });

    setProject(nextState);
    localStorage.setItem("project", JSON.stringify(nextState));
  };

  // console.log(project);

  const onAdd = (projectType) => (event) => {
    setOpenDrawer(true);
    console.log(projectType);
  };

  return (
    <div>
      <div className="px-4 sm:px-0 flex justify-between align-bottom">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Configure Project
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Project configuration screen
          </p>
        </h3>
      </div>
      <div className=" mt-6 border-t border-gray-100">
        <form action="#" method="POST" className="max-w-xl mt-10">
          <div className=" border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-3">
              <OutlinedInput label="Project name" />
            </div>

            <div className="sm:col-span-3">
              <TextField label="Address" />
            </div>
            <div className="sm:col-span-3">
              <OutlinedInput label="Developer" />
            </div>
            <div className="sm:col-span-3">
              <Select
                options={amenities}
                label="Amenities"
                nameProperty="name"
                valueProperty="id"
              />
            </div>
          </div>
          <div className="pb-12 pt-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Project details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-4">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project type
                </label>
                <div className="mt-2">
                  <Select
                    options={projectTypes}
                    nameProperty="name"
                    valueProperty="id"
                    onSelect={handleChange("projectType")}
                  />
                </div>
                <div className="w-96 gap-y-8 grid grid-cols-1">
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="bungalowSociety"
                      className="m-3 mt-3"
                      size="sm"
                      label="Bunglow society"
                      defaultChecked={project["bungalowSociety"]}
                    />
                    {project["bungalowSociety"] == true && (
                      <Button size="sm" onClick={onAdd("Bungalow Society")}>
                        Add
                      </Button>
                    )}
                  </div>
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="buildingComplex"
                      className="m-3"
                      size="sm"
                      label="Building complex"
                      defaultChecked={project["buildingComplex"]}
                    />
                    {project["buildingComplex"] == true && (
                      <Button size="sm" onClick={onAdd("Building Complex")}>
                        Add
                      </Button>
                    )}
                  </div>
                  {/* <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="combined"
                      className="m-3"
                      size="sm"
                      label="Combined (Building complex with bungalows)"
                      defaultChecked={project["combined"]}
                    />
                    {project["combined"] == true && (
                      <Button size="sm" onClick={onAdd()}>
                        Add
                      </Button>
                    )}
                  </div> */}
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="privateBungalow"
                      className="m-3"
                      size="sm"
                      label="Private Bungalow"
                      defaultChecked={project["privateBungalow"]}
                    />
                    {project["privateBungalow"] == true && (
                      <Button size="sm" onClick={onAdd("Private Bungalow")}>
                        Add
                      </Button>
                    )}
                  </div>

                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="mall"
                      className="m-3"
                      size="sm"
                      label="Mall"
                      defaultChecked={project["mall"]}
                    />
                    {project["mall"] == true && (
                      <Button size="sm" onClick={onAdd("Mall")}>
                        Add
                      </Button>
                    )}
                  </div>
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="shop"
                      className="m-3"
                      size="sm"
                      label="Shop"
                      defaultChecked={project["shop"]}
                    />
                    {project["shop"] == true && (
                      <Button size="sm" onClick={onAdd("Shop")}>
                        Add
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {project?.type === "Bunglow Society" ||
            project?.type === "Private Bunglow" ? null : (
              <div className="mt-10 border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add Building details
                </h2>

                <div className="sm:col-span-3">
                  <OutlinedInput label="Building Name" />
                </div>

                <div className="sm:col-span-3">
                  <OutlinedInput label="Floors" />
                </div>

                <div className="sm:col-span-3 flex">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6 ml-3">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Ground Floor
                    </label>
                    <p className="text-gray-500">
                      Doe the building has ground floor?
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <OutlinedInput label="No. of units" />
                </div>
              </div>
            )}

            {/* floor plan */}
            {project?.type === "Bunglow Society" ||
            project?.type === "Private Bunglow" ? null : (
              <div className="mt-10 border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add Floor plan
                </h2>

                <div className="sm:col-span-3">
                  <OutlinedInput label="Floor plan name" />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Units
                  </label>

                  <TableTemplateComponent
                    columns={columns}
                    onAdd={() => {
                      setIsUnitModalVisible(true);
                    }}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    hasCrudActions={true}
                  />
                </div>
              </div>
            )}

            {project?.type === "Bunglow Society" ||
            project?.type === "Private Bunglow" ? (
              <div className="mt-10 border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add Units
                </h2>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Units
                  </label>

                  <TableTemplateComponent
                    columns={columns}
                    onAdd={() => {
                      setIsUnitModalVisible(true);
                    }}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    hasCrudActions={true}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </form>

        <Drawer anchor="right" open={openDrawer}>
          <Box sx={{ width: "10rem" }} onClose={handleCloseDrawer}>
            hi
          </Box>
        </Drawer>
      </div>

      <UnitModal
        isModalOpen={isUnitModalVisible}
        closeModal={setIsUnitModalVisible}
      />
    </div>
  );
}
