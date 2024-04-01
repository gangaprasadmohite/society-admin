"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Checkbox, IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import Select from "@/lib/components/select";
import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import { produce } from "immer";
import TableTemplateComponent from "@/lib/components/table/TableTemplateComponent";
import { UnitModal } from "@/lib/components/modal";
import Link from "next/link";

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

  const handleModeChange = (e) => {
    setIsEditMode(!isEditMode);
  };

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
            <div className=" border-b border-gray-900/10  grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="col-span-4 sm:col-span-4">
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
                    onSelect={handleChange("projectType")}
                  />
                </div> */}
                <div className="w-96 gap-x-16 gap-y-8 grid grid-cols-4">
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
                      <Link
                        className="ml-8"
                        href="/building?type=bunglowsociety"
                      >
                        <Button size="sm">Add</Button>
                      </Link>
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
                      <Link
                        className="ml-8"
                        href="/building?type=buildingcomplex"
                      >
                        <Button size="sm">Add</Button>
                      </Link>
                    )}
                  </div>
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="combined"
                      className="m-3"
                      size="sm"
                      label="Combined (Building complex with bungalows)"
                      defaultChecked={project["combined"]}
                    />
                    {project["combined"] == true && (
                      <Link className="ml-8" href="/building?type=combined">
                        <Button size="sm">Add</Button>
                      </Link>
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
                      <Link
                        className="ml-8"
                        href="/building?type=privatebunglow"
                      >
                        <Button size="sm">Add</Button>
                      </Link>
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
                      <Link className="ml-8" href="/building?type=mall">
                        <Button size="sm">Add</Button>
                      </Link>
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
                      <Link className="ml-8" href="/building?type=shop">
                        <Button size="sm">Add</Button>
                      </Link>
                    )}
                  </div>
                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="bungalowsWithShops"
                      className="m-3"
                      size="sm"
                      label="Bungalows with shops"
                      defaultChecked={project["bungalowsWithShops"]}
                    />
                    {project["bungalowsWithShops"] == true && (
                      <Link
                        className="ml-8"
                        href="/building?type=bungalowswithshops"
                      >
                        <Button size="sm">Add</Button>
                      </Link>
                    )}
                  </div>

                  <div>
                    <Checkbox
                      onChange={handleChange("type")}
                      name="buildingComplexWithShops"
                      className="m-3"
                      size="sm"
                      label="Building complex with shops"
                      defaultChecked={project["buildingComplexWithShops"]}
                    />
                    {project["buildingComplexWithShops"] == true && (
                      <Link
                        className="ml-8"
                        href="/building?type=buildingcomplexwithshops"
                      >
                        <Button size="sm">Add </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* r type */}
              {/* <div className="sm:col-span-4">
                {project?.projectType?.name === "Residential" && (
                  <fieldset>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="mt-4 pb-4 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="type"
                          type="radio"
                          value="Bunglow Society"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Bunglow Society
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="type"
                          type="radio"
                          value="Building complex"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Building complex
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="type"
                          type="radio"
                          value="Combined (Building complex with bunglows)"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Combined (Building complex with bunglows)
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="type"
                          type="radio"
                          value="Private Bunglow"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Private Bunglow
                        </label>
                      </div>
                    </div>
                  </fieldset>
                )}

                {project?.projectType?.name === "Commercial" && (
                  <fieldset>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="mt-4 pb-4 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="type"
                          type="radio"
                          value="Mall"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Mall
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="type"
                          type="radio"
                          value="Shops"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Shops
                        </label>
                        {project["type"] == "Shops" && (
                          <Link href="/building?type=shops">
                            <Button sx={{ width: "10rem" }}>Add Shops</Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </fieldset>
                )}

                {project?.projectType?.name === "Mixed use" && (
                  <fieldset>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="mt-4 pb-4 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="type"
                          type="radio"
                          value="Bunglows with shops"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Bunglows with shops
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="type"
                          type="radio"
                          value="Building complex with shops"
                          onChange={handleChange("type")}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Building complex with shops
                        </label>
                      </div>
                    </div>
                  </fieldset>
                )}
              </div> */}
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
    </div>
  );
}
