"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import Select from "@/lib/components/Select";
import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import { produce } from "immer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Project() {
  const ROUTER = useRouter();

  const [agreed, setAgreed] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleChange = (name) => (event) => {
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
          <div className="border-b border-gray-900/10 pb-12 pt-12">
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
              </div>

              {/* r type */}
              <div className="sm:col-span-4">
                {project?.projectType?.name === "Residential" && (
                  <fieldset>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="mt-4 space-y-6">
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
                    <div className="mt-4 space-y-6">
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
                      </div>
                    </div>
                  </fieldset>
                )}

                {project?.projectType?.name === "Mixed use" && (
                  <fieldset>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="mt-4 space-y-6">
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
              </div>
            </div>

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

            {/* floor plan */}
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
