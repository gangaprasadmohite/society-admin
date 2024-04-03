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
  Drawer,
  FormHelperText,
  IconButton,
  Input,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import Select from "@/lib/components/select";
import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import { produce } from "immer";
import TableTemplateComponent from "@/lib/components/table/TableTemplateComponent";
import { UnitModal } from "@/lib/components/modal";
import axios from "axios";
import { AddCircleOutlined } from "@mui/icons-material";

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
  const [typeOfProject, setTypeOfProject] = useState("");
  const [openUnitsDrawer, setOpenUnitsDrawer] = useState(false);

  const [openBuildingComplexDrawer, setOpenBuildingComplexDrawer] =
    useState(false);

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

  const addUnitsOnFloor = (index, innerIndex) => () => {
    console.log(index, innerIndex);
    // let temp = unitsOnFloor;
    // temp[index].splice(innerIndex, 0, "");
    // console.log(temp);
    let temp = unitsOnFloor;
    temp[index].push("");
    console.log(temp);
    setUnitsOnFloor(temp);
  };

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
  const [buildings, setBuildings] = useState([]);
  const handleAddBuildings = () => {
    console.log("Adding building");
    setOpenBuildingComplexDrawer(true);
  };
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

  // console.log(project);
  useEffect(() => {
    (async () => {
      let response = await axios.get("http://localhost:5001/getBuildings");
      setBuildings(response.data);
    })();
  }, [openDrawer]);

  const onAdd = (projectType) => (event) => {
    setOpenDrawer(true);
    setTypeOfProject(projectType);
    console.log(projectType);
  };

  return (
    <div>
      <div className="px-4 ml-64 sm:px-0 flex justify-between align-bottom">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
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
                  {/* <div className="mt-2">
                    <Select
                      options={projectTypes}
                      nameProperty="name"
                      valueProperty="id"
                      onSelect={handleChange("type")}
                    />
                  </div> */}
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
                    <div>
                      <Checkbox
                        onChange={handleChange("type")}
                        name="officeComplex"
                        className="m-3"
                        size="sm"
                        label="Office Complex"
                        defaultChecked={project["shop"]}
                      />
                      {project["shop"] == true && (
                        <Button size="sm" onClick={onAdd("Office Complex")}>
                          Add
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
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
          </form>
        </div>

        <Drawer
          anchor="right"
          open={openDrawer}
          size="lg"
          onClose={handleCloseDrawer}
        >
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
                        <Button
                          size="sm"
                          onClick={() => {
                            setOpenUnitsDrawer(true);
                          }}
                        >
                          Add Floors
                        </Button>
                      ),
                    },
                  ]}
                  data={buildings}
                />

                <Drawer
                  open={openBuildingComplexDrawer}
                  anchor="right"
                  size="lg"
                  onClose={() => {
                    setOpenBuildingComplexDrawer(false);
                  }}
                >
                  <Box className="m-6">
                    <FormHelperText>Building Name</FormHelperText>
                    <Input className="mb-4 mt-1" placeholder="Building Name" />
                    <FormHelperText>Number of Floors</FormHelperText>
                    <Input
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
                        <Input
                          className="mb-4 mt-1"
                          placeholder="No. of basement floors"
                          type="number"
                        />
                      </>
                    )}
                    <br />
                    <div className="flex justify-end">
                      <Button
                        fullWidth
                        onClick={() => {
                          setOpenBuildingComplexDrawer(false);
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </Box>
                </Drawer>

                <Drawer
                  open={openUnitsDrawer}
                  anchor="right"
                  size="lg"
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
                                <div className="flex">
                                  <Input className="w-16" />

                                  <IconButton
                                    className="w-6"
                                    onClick={addUnitsOnFloor(index, innerIndex)}
                                  >
                                    <AddCircleOutlined />
                                  </IconButton>
                                </div>
                              )
                            )}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionGroup>
                    <Button
                      fullWidth
                      sx={{ marginTop: "1rem" }}
                      onClick={() => {
                        setOpenUnitsDrawer(false);
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Drawer>
                <Button
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  onClick={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  Save
                </Button>
              </>
            )}
            {typeOfProject == "Bungalow Society" && (
              <>
                <div>Bungalow Society</div>
                <TableTemplateComponent
                  columns={[{ header: "Units" }]}
                  hasCrudActions={true}
                  onAdd={() => {}}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
                <Button
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  onClick={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  Save
                </Button>
              </>
            )}
            {typeOfProject == "Private Bungalow" && (
              <>
                <div>Private Bungalow</div>
                <TableTemplateComponent
                  columns={[{ header: "Units" }]}
                  hasCrudActions={true}
                  onAdd={() => {}}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
                <Button
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  onClick={() => {
                    setOpenUnitsDrawer(false);
                  }}
                >
                  Save
                </Button>
              </>
            )}
            {typeOfProject == "Shop" && (
              <>
                <div>shop</div>
              </>
            )}
            {typeOfProject == "Mall" && (
              <>
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
                          <Button
                            size="sm"
                            onClick={() => {
                              setOpenUnitsDrawer(true);
                            }}
                          >
                            Add Units
                          </Button>
                        ),
                      },
                    ]}
                    data={buildings}
                  />

                  <Drawer
                    open={openBuildingComplexDrawer}
                    anchor="right"
                    size="lg"
                    onClose={() => {
                      setOpenBuildingComplexDrawer(false);
                    }}
                  >
                    <Box className="m-6">
                      <FormHelperText>Building Name</FormHelperText>
                      <Input
                        className="mb-4 mt-1"
                        placeholder="Building Name"
                      />
                      <FormHelperText>Number of Floors</FormHelperText>
                      <Input
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
                          <Input
                            className="mb-4 mt-1"
                            placeholder="No. of basement floors"
                            type="number"
                          />
                        </>
                      )}
                      <br />
                      <div className="flex justify-end">
                        <Button
                          fullWidth
                          onClick={() => {
                            setOpenBuildingComplexDrawer(false);
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </Box>
                  </Drawer>

                  <Drawer
                    open={openUnitsDrawer}
                    anchor="right"
                    size="lg"
                    onClose={() => {
                      setOpenUnitsDrawer(false);
                    }}
                  >
                    <Box className="m-6">
                      <AccordionGroup>
                        {unitsOnFloor.map((element, index) => (
                          <Accordion>
                            <AccordionSummary>
                              Floor {index + 1}
                            </AccordionSummary>
                            <AccordionDetails>
                              {unitsOnFloor[index].map(
                                (element, innerIndex) => (
                                  <div className="flex">
                                    <Input className="w-16" />
                                    <IconButton
                                      className="w-6"
                                      onClick={addUnitsOnFloor(
                                        index,
                                        innerIndex
                                      )}
                                    >
                                      <AddCircleOutlined />
                                    </IconButton>
                                  </div>
                                )
                              )}
                              {/* <div className="flex">
                                <Input className="w-16" />
                                <IconButton className="w-6">
                                  <AddCircleOutlined />
                                </IconButton>
                              </div> */}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </AccordionGroup>
                      <Button
                        fullWidth
                        sx={{ marginTop: "1rem" }}
                        onClick={() => {
                          setOpenUnitsDrawer(false);
                        }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Drawer>
                  <Button
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                    onClick={() => {
                      setOpenUnitsDrawer(false);
                    }}
                  >
                    Save
                  </Button>
                </>
              </>
            )}
            {typeOfProject == "Office Complex" && (
              <>
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
                          <Button
                            size="sm"
                            onClick={() => {
                              setOpenUnitsDrawer(true);
                            }}
                          >
                            Add Units
                          </Button>
                        ),
                      },
                    ]}
                    data={buildings}
                  />

                  <Drawer
                    open={openBuildingComplexDrawer}
                    anchor="right"
                    size="lg"
                    onClose={() => {
                      setOpenBuildingComplexDrawer(false);
                    }}
                  >
                    <Box className="m-6">
                      <FormHelperText>Building Name</FormHelperText>
                      <Input
                        className="mb-4 mt-1"
                        placeholder="Building Name"
                      />
                      <FormHelperText>Number of Floors</FormHelperText>
                      <Input
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
                          <Input
                            className="mb-4 mt-1"
                            placeholder="No. of basement floors"
                            type="number"
                          />
                        </>
                      )}
                      <br />
                      <div className="flex justify-end">
                        <Button
                          fullWidth
                          onClick={() => {
                            setOpenBuildingComplexDrawer(false);
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </Box>
                  </Drawer>

                  <Drawer
                    open={openUnitsDrawer}
                    anchor="right"
                    size="lg"
                    onClose={() => {
                      setOpenUnitsDrawer(false);
                    }}
                  >
                    <Box className="m-6">
                      <AccordionGroup>
                        {unitsOnFloor.map((element, index) => (
                          <Accordion>
                            <AccordionSummary>
                              Floor {index + 1}
                            </AccordionSummary>
                            <AccordionDetails>
                              {unitsOnFloor[index].map(
                                (element, innerIndex) => (
                                  <div className="flex">
                                    <Input className="w-16" />
                                    <IconButton
                                      className="w-6"
                                      onClick={addUnitsOnFloor(
                                        index,
                                        innerIndex
                                      )}
                                    >
                                      <AddCircleOutlined />
                                    </IconButton>
                                  </div>
                                )
                              )}
                              {/* <div className="flex">
                                <Input className="w-16" />
                                <IconButton className="w-6">
                                  <AddCircleOutlined />
                                </IconButton>
                              </div> */}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </AccordionGroup>
                      <Button
                        fullWidth
                        sx={{ marginTop: "1rem" }}
                        onClick={() => {
                          setOpenUnitsDrawer(false);
                        }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Drawer>
                </>
              </>
            )}
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
