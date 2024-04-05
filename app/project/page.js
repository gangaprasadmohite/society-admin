"use client";

import OutlinedInput from "@/lib/components/OulinedInput";
import Drawer from "@/lib/components/drawer";
import { ConfigFormContainer } from "@/lib/components/project";
import Select from "@/lib/components/select";
import StyledButton from "@/lib/components/styledButton";
import AddIcon from "@mui/icons-material/Add";
import { Checkbox, IconButton } from "@mui/joy";
import { produce } from "immer";
import { useState } from "react";

export default function Project() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [project, setProject] = useState({
    name: "",
    address: "",
    developer: null,
    amenities: [],
    types: {},
  });

  const [currentType, setCurrentType] = useState("");

  const [projectTypes, setProjectTypes] = useState([
    {
      id: 1,
      name: "bunglowSociety",
      alias: "Bunglow society",
      isChecked: false,
    },
    {
      id: 2,
      name: "buildingComplex",
      alias: "Building Complex",
      isChecked: false,
    },
    {
      id: 3,
      name: "privateBunglow",
      alias: "Private Bunglow",
      isChecked: false,
    },
    {
      id: 4,
      name: "mall",
      alias: "Mall",
      isChecked: false,
    },
    {
      id: 5,
      name: "shop",
      alias: "Shop",
      isChecked: false,
    },
    {
      id: 6,
      name: "officeComplex",
      alias: "Office Complex",
      isChecked: false,
    },
  ]);

  const [amenities, setAmenities] = useState([
    { id: 1, name: "Swimming Pool" },
    { id: 2, name: "Gym" },
    { id: 3, name: "Tennis court" },
  ]);

  const handleProjectTypeChange = (index) => (event) => {
    let nextState = produce(projectTypes, (draft) => {
      draft[index]["isChecked"] = event.target.checked;
    });

    setProjectTypes(nextState);
  };

  const handleAddProjectDetails = (index) => (event) => {
    let type = projectTypes[index]["name"];
    setCurrentType(type);
    let nextState = produce(project, (draft) => {
      draft["types"][type] = {};
    });
    setProject(nextState);
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <form method="POST" className="max-w-xl mt-10">
          <div>
            <div className="sm:col-span-12">
              <OutlinedInput label="Project name" />
            </div>
            <div className="mt-5  grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-12">
                <div className="mt-5 space-y-10">
                  <fieldset>
                    <div className="space-y-6">
                      {projectTypes.map((type, index) => (
                        <div className="relative flex gap-x-3" key={type.id}>
                          <div className="flex h-6 items-center">
                            <div className="flex items-center">
                              <Checkbox
                                label={type.alias}
                                variant="soft"
                                className="mr-5"
                                name={type.name}
                                checked={type.isChecked}
                                onChange={handleProjectTypeChange(index)}
                              />
                              <IconButton
                                size="sm"
                                disabled={!type.isChecked}
                                onClick={handleAddProjectDetails(index)}
                              >
                                <AddIcon />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="mt-5 sm:col-span-12">
                <OutlinedInput label="Address" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <OutlinedInput label="Developer" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <Select
                  options={amenities}
                  label="Amenities"
                  nameProperty="name"
                  valueProperty="id"
                />
              </div>
              <div className="w-full flex justify-end">
                <StyledButton label="Save" onClick={() => {}} />
              </div>
            </div>
          </div>
        </form>
      </div>

      <Drawer
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        children={<ConfigFormContainer type={currentType} />}
      />
    </div>
  );
}
