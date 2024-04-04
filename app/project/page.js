"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormHelperText,
  IconButton,
  Input,
  Option,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import Select from "@/lib/components/select";
import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import { produce } from "immer";
import TableTemplateComponent from "@/lib/components/table/TableTemplateComponent";
import { UnitModal } from "@/lib/components/modal";
import Link from "next/link";
import axios from "axios";
import { AddCircleOutlined } from "@mui/icons-material";
import Drawer from "@/lib/components/drawer/Drawer";
import StyledButton from "@/lib/components/styledButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Project() {
  const ROUTER = useRouter();

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

  const [agreed, setAgreed] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [buildings, setBuildings] = useState([]);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [typeOfProject, setTypeOfProject] = useState("");
  const [openUnitsDrawer, setOpenUnitsDrawer] = useState(false);

  const [openBuildingComplexDrawer, setOpenBuildingComplexDrawer] =
    useState(false);
  const [openUnitsModal, setOpenUnitsModal] = useState(false);

  const [hasGroundFloor, setHasGroundFloor] = useState(false);
  const [hasBasement, setHasBasement] = useState(false);
  const [unitsOnFloor, setUnitsOnFloor] = useState(Array(12).fill({}));
  // console.log(unitsOnFloor);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleModeChange = (e) => {
    setIsEditMode(!isEditMode);
  };

  const onAdd = (projectType) => (event) => {
    setOpenDrawer(true);
    setTypeOfProject(projectType);
    console.log(projectType);
  };

  const handleAddBuildings = () => {
    console.log("Adding building");
    setOpenBuildingComplexDrawer(true);
  };

  const addUnitsOnFloor = (index, innerIndex) => () => {
    console.log(index, innerIndex);
    // let temp = unitsOnFloor;
    // temp[index].splice(innerIndex, 0, "");
    // console.log(temp);
    let temp = unitsOnFloor;
    temp[index].units.push({
      unitNumber: innerIndex + 1,
      unitInfo: { id: 1, type: "1bhk-1000SqFt" },
    });
    console.log(temp);
    setUnitsOnFloor(temp);
  };

  useEffect(() => {
    (async () => {
      let response = await axios.get("http://localhost:5001/getBuildings");
      setBuildings(response.data);
    })();
  }, [openDrawer]);

  useEffect(() => {
    let temp = unitsOnFloor;

    for (let i = 0; i < 12; i++) {
      temp[i] = {
        floorNumber: i,
        units: [{ unitNumber: 1, unitInfo: { id: 1, type: "1bhk-1000SqFt" } }],
      };

      setUnitsOnFloor(temp);
    }
  }, []);

  const [project, setProject] = useState(
    JSON.parse(localStorage.getItem("project")) || {
      projectType: null,
    }
  );

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
    console.log(project);
    let nextState = produce(project, (draft) => {
      switch (name) {
        case "projectType":
          draft[name] = event;
          draft["type"] = "";
          break;

        case "type":
          draft[event.target.name] = event.target.checked;
          break;

        default:
          break;
      }
    });

    setProject(nextState);
    localStorage.setItem("project", JSON.stringify(nextState));
  };

  console.log(project);

  return (
    <div className="">
      <div className="px-4  sm:px-0 flex justify-between align-bottom">
        <h3 className="text-base ml-64 font-semibold leading-7 text-gray-900">
          Configure Project
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Project configuration screen
          </p>
        </h3>
      </div>
      <div className="flex flex-col items-center">
        <div className=" mt-6 border-t border-gray-100">
          <form action="#" method="POST" className="max-w-xl mt-10">
            <div className=" border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-3">
                <OutlinedInput label="Project name" />
              </div>
              <div className="mt-10 border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Project type
                  </label>

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
                        <StyledButton
                          size="sm"
                          label="add"
                          onClick={onAdd("Bungalow Society")}
                        />
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
                        <StyledButton
                          label="Add"
                          size="sm"
                          onClick={onAdd("Building Complex")}
                        />
                      )}
                    </div>

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
                        <StyledButton
                          label="Add"
                          size="sm"
                          onClick={onAdd("Private Bungalow")}
                        />
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
                        <StyledButton
                          label="Add"
                          size="sm"
                          onClick={onAdd("Mall")}
                        />
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
                        <StyledButton
                          label="Add"
                          onClick={() => {}}
                          size="sm"
                        />
                      )}
                    </div>
                    <div>
                      <Checkbox
                        onChange={handleChange("type")}
                        name="officeComplex"
                        className="m-3"
                        size="sm"
                        label="Office Complex"
                        defaultChecked={project["officeComplex"]}
                      />
                      {project["mall"] == true && (
                        <StyledButton
                          label="Add"
                          size="sm"
                          onClick={onAdd("Office Complex")}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <OutlinedInput label="Address" />
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
                <br />
                <StyledButton label="Save" />
              </div>
            </div>
          </form>
        </div>

        <Drawer open={openDrawer} onClose={handleCloseDrawer}>
          <Box className="p-6">
            {typeOfProject == "Building Complex" && (
              <>
                <div>Building Complex</div>
                <TableTemplateComponent
                  hasCrudActions={true}
                  onAdd={handleAddBuildings}
                  columns={[
                    { header: "Building No.", key: "buildingName" },
                    { header: "Project Name", key: "projectName" },
                    { header: "No. of Floors", key: "floors" },
                    {
                      header: "",
                      key: null,
                      cell: () => (
                        <StyledButton
                          label="Add Floors"
                          size="sm"
                          onClick={() => {
                            setOpenUnitsDrawer(true);
                          }}
                        />
                      ),
                    },
                  ]}
                  data={buildings}
                />
                <Drawer
                  open={openBuildingComplexDrawer}
                  onClose={() => {
                    setOpenBuildingComplexDrawer(false);
                  }}
                >
                  <div className="m-6 min-w-72">
                    <FormHelperText>Building Name</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="Building Name"
                    />

                    <FormHelperText>Number of Floors</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="No. of Floors"
                      type="number"
                    />
                    <Checkbox
                      className="mb-4 mt-1"
                      onChange={() => {
                        setHasGroundFloor((prev) => !prev);
                      }}
                      checked={hasGroundFloor}
                      label="Does the building include a ground floor?"
                    />
                    <br />
                    <Checkbox
                      className="mb-4 mt-1"
                      label="Does the building have a basement?"
                      value={hasBasement}
                      onChange={() => {
                        setHasBasement((prev) => !prev);
                      }}
                    />
                    {hasBasement && (
                      <>
                        <OutlinedInput
                          className="mb-4 mt-1"
                          placeholder="No. of basement floors"
                          type="number"
                        />
                      </>
                    )}
                    <br />
                    <div className="flex justify-end">
                      <StyledButton
                        label="Save"
                        onClick={() => {
                          setOpenBuildingComplexDrawer(false);
                        }}
                      />
                    </div>
                  </div>
                </Drawer>
                <Drawer
                  open={openUnitsDrawer}
                  onClose={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  <Box className="m-6">
                    <AccordionGroup>
                      {unitsOnFloor.map((element, index) => (
                        <Accordion>
                          <AccordionSummary>Floor {index + 1}</AccordionSummary>
                          <AccordionDetails>
                            {unitsOnFloor[index].units.map(
                              (element, innerIndex) => (
                                <div className="flex m-4">
                                  <div className="mx-1">
                                    <OutlinedInput
                                      label="Unit No."
                                      className="w-16"
                                    />
                                  </div>
                                  <div className="mx-1">
                                    <Select
                                      options={[
                                        { id: 1, name: "1bhk-100sqft" },
                                        { id: 2, name: "2bhk-1500sqft" },
                                        { id: 3, name: "3bhk-2000sqft" },
                                      ]}
                                      label="Unit type"
                                      nameProperty="name"
                                      valueProperty="id"
                                    />
                                  </div>
                                  <IconButton
                                    // className="h-1"
                                    onClick={addUnitsOnFloor(index, innerIndex)}
                                  >
                                    <AddCircleOutlined />
                                  </IconButton>
                                </div>
                              )
                            )}
                            {/* <
                              div className="flex">
                                <OutlinedInput className="w-16" />
                                <IconButton className="w-6">
                                  <AddCircleOutlined />
                                </IconButton>
                              </div> */}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionGroup>
                    <StyledButton
                      label="Save"
                      sx={{ marginTop: "1rem" }}
                      onClick={() => {
                        setOpenUnitsDrawer(false);
                      }}
                    />
                  </Box>
                </Drawer>
                <StyledButton
                  label="Save"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCloseDrawer}
                />
              </>
            )}
            {typeOfProject == "Bungalow Society" && (
              <>
                <div>Bungalow Society</div>
                <TableTemplateComponent
                  columns={[{ header: "Units" }]}
                  data={[]}
                  hasCrudActions={true}
                  onAdd={() => {
                    setOpenUnitsModal(true);
                  }}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
                <StyledButton
                  label="Save"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCloseDrawer}
                />

                <UnitModal
                  isModalOpen={openUnitsModal}
                  closeModal={() => {
                    setOpenUnitsModal(false);
                  }}
                />
              </>
            )}
            {typeOfProject == "Private Bungalow" && (
              <>
                <div>Private Bungalow</div>
                <TableTemplateComponent
                  columns={[{ header: "Units" }]}
                  data={[]}
                  hasCrudActions={true}
                  onAdd={() => {
                    setOpenUnitsModal(true);
                  }}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
                <StyledButton
                  label="Save"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCloseDrawer}
                />
                <UnitModal
                  isModalOpen={openUnitsModal}
                  closeModal={() => {
                    setOpenUnitsModal(false);
                  }}
                />{" "}
              </>
            )}
            {typeOfProject == "Shop" && (
              <>
                <div>shop</div>
              </>
            )}

            {/* currently making changes in mall */}
            {typeOfProject == "Mall" && (
              <>
                <div>Mall</div>
                <TableTemplateComponent
                  hasCrudActions={true}
                  onAdd={handleAddBuildings}
                  columns={[
                    { header: "Building No.", key: "buildingName" },
                    { header: "Project Name", key: "projectName" },
                    { header: "No. of Floors", key: "floors" },
                    {
                      header: "",
                      key: null,
                      cell: () => (
                        <StyledButton
                          label="Add Floors"
                          size="sm"
                          onClick={() => {
                            setOpenUnitsDrawer(true);
                          }}
                        />
                      ),
                    },
                  ]}
                  data={buildings}
                />
                <Drawer
                  open={openBuildingComplexDrawer}
                  onClose={() => {
                    setOpenBuildingComplexDrawer(false);
                  }}
                >
                  <div className="m-6 min-w-72">
                    <FormHelperText>Building Name</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="Building Name"
                    />

                    <FormHelperText>Number of Floors</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="No. of Floors"
                      type="number"
                    />
                    <Checkbox
                      className="mb-4 mt-1"
                      onChange={() => {
                        setHasGroundFloor((prev) => !prev);
                      }}
                      checked={hasGroundFloor}
                      label="Does the building include a ground floor?"
                    />
                    <br />
                    <Checkbox
                      className="mb-4 mt-1"
                      label="Does the building have a basement?"
                      value={hasBasement}
                      onChange={() => {
                        setHasBasement((prev) => !prev);
                      }}
                    />
                    {hasBasement && (
                      <>
                        <OutlinedInput
                          className="mb-4 mt-1"
                          placeholder="No. of basement floors"
                          type="number"
                        />
                      </>
                    )}
                    <br />
                    <div className="flex justify-end">
                      <StyledButton
                        label="Save"
                        onClick={() => {
                          setOpenBuildingComplexDrawer(false);
                        }}
                      />
                    </div>
                  </div>
                </Drawer>
                <Drawer
                  open={openUnitsDrawer}
                  onClose={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  <Box className="m-6">
                    <AccordionGroup>
                      {unitsOnFloor.map((element, index) => (
                        <Accordion>
                          <AccordionSummary>Floor {index + 1}</AccordionSummary>
                          <AccordionDetails>
                            {unitsOnFloor[index].units.map(
                              (element, innerIndex) => (
                                <div className="flex m-4">
                                  <div className="mx-1">
                                    <OutlinedInput
                                      label="Unit No."
                                      className="w-16"
                                    />
                                  </div>
                                  <div className="mx-1">
                                    <Select
                                      options={[
                                        { id: 1, name: "1bhk-100sqft" },
                                        { id: 2, name: "2bhk-1500sqft" },
                                        { id: 3, name: "3bhk-2000sqft" },
                                      ]}
                                      label="Unit type"
                                      nameProperty="name"
                                      valueProperty="id"
                                    />
                                  </div>
                                  <IconButton
                                    className="w-6"
                                    onClick={addUnitsOnFloor(index, innerIndex)}
                                  >
                                    <AddCircleOutlined />
                                  </IconButton>
                                </div>
                              )
                            )}
                            {/* <
                              div className="flex">
                                <OutlinedInput className="w-16" />
                                <IconButton className="w-6">
                                  <AddCircleOutlined />
                                </IconButton>
                              </div> */}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionGroup>
                    <StyledButton
                      label="Save"
                      sx={{ marginTop: "1rem" }}
                      onClick={() => {
                        setOpenUnitsDrawer(false);
                      }}
                    />
                  </Box>
                </Drawer>
                <StyledButton
                  label="Save"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCloseDrawer}
                />
              </>
            )}

            {typeOfProject == "Office Complex" && (
              <>
                <div>Office Complex</div>
                <TableTemplateComponent
                  hasCrudActions={true}
                  onAdd={handleAddBuildings}
                  columns={[
                    { header: "Building No.", key: "buildingName" },
                    { header: "Project Name", key: "projectName" },
                    { header: "No. of Floors", key: "floors" },
                    {
                      header: "",
                      key: null,
                      cell: () => (
                        <StyledButton
                          label="Add Floors"
                          size="sm"
                          onClick={() => {
                            setOpenUnitsDrawer(true);
                          }}
                        />
                      ),
                    },
                  ]}
                  data={buildings}
                />
                <Drawer
                  open={openBuildingComplexDrawer}
                  onClose={() => {
                    setOpenBuildingComplexDrawer(false);
                  }}
                >
                  <div className="m-6 min-w-72">
                    <FormHelperText>Building Name</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="Building Name"
                    />

                    <FormHelperText>Number of Floors</FormHelperText>
                    <OutlinedInput
                      className="mb-4 mt-1"
                      placeholder="No. of Floors"
                      type="number"
                    />
                    <Checkbox
                      className="mb-4 mt-1"
                      onChange={() => {
                        setHasGroundFloor((prev) => !prev);
                      }}
                      checked={hasGroundFloor}
                      label="Does the building include a ground floor?"
                    />
                    <br />
                    <Checkbox
                      className="mb-4 mt-1"
                      label="Does the building have a basement?"
                      value={hasBasement}
                      onChange={() => {
                        setHasBasement((prev) => !prev);
                      }}
                    />
                    {hasBasement && (
                      <>
                        <OutlinedInput
                          className="mb-4 mt-1"
                          placeholder="No. of basement floors"
                          type="number"
                        />
                      </>
                    )}
                    <br />
                    <div className="flex justify-end">
                      <StyledButton
                        label="Save"
                        onClick={() => {
                          setOpenBuildingComplexDrawer(false);
                        }}
                      />
                    </div>
                  </div>
                </Drawer>
                <Drawer
                  open={openUnitsDrawer}
                  onClose={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  <Box className="m-6">
                    <AccordionGroup>
                      {unitsOnFloor.map((element, index) => (
                        <Accordion>
                          <AccordionSummary>Floor {index + 1}</AccordionSummary>
                          <AccordionDetails>
                            {unitsOnFloor[index].units.map(
                              (element, innerIndex) => (
                                <div className="flex m-4">
                                  <div className="mx-1">
                                    <OutlinedInput
                                      label="Unit No."
                                      className="w-16"
                                    />
                                  </div>
                                  <div className="mx-1">
                                    <Select
                                      options={[
                                        { id: 1, name: "1bhk-100sqft" },
                                        { id: 2, name: "2bhk-1500sqft" },
                                        { id: 3, name: "3bhk-2000sqft" },
                                      ]}
                                      label="Unit type"
                                      nameProperty="name"
                                      valueProperty="id"
                                    />
                                  </div>
                                  <IconButton
                                    className="w-6"
                                    onClick={addUnitsOnFloor(index, innerIndex)}
                                  >
                                    <AddCircleOutlined />
                                  </IconButton>
                                </div>
                              )
                            )}
                            {/* <
                              div className="flex">
                                <OutlinedInput className="w-16" />
                                <IconButton className="w-6">
                                  <AddCircleOutlined />
                                </IconButton>
                              </div> */}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionGroup>
                    <StyledButton
                      label="Save"
                      sx={{ marginTop: "1rem" }}
                      onClick={() => {
                        setOpenUnitsDrawer(false);
                      }}
                    />
                  </Box>
                </Drawer>
                <StyledButton
                  label="Save"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCloseDrawer}
                />
              </>
            )}
          </Box>
        </Drawer>
      </div>
    </div>
  );
}
