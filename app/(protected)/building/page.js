"use client";
import OutlinedInput from "@/lib/components/OulinedInput";
import { UnitModal } from "@/lib/components/modal";
import TableTemplateComponent from "@/lib/components/table/TableTemplateComponent";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/joy";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Building() {
  let projectType = useSearchParams().get("type");
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

  const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);

  return (
    <>
      {/* <div>Building</div> */}
      <Link href="/project">
        <Button startDecorator={<KeyboardArrowLeft />} size="sm"></Button>
      </Link>
      {projectType === "bunglowsociety" || projectType === "privatebunglow" ? (
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

      {projectType === "bunglowsociety" ||
      projectType === "privatebunglow" ? null : (
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
              <label htmlFor="comments" className="font-medium text-gray-900">
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

      {projectType === "bunglowsociety" ||
      projectType === "privatebunglow" ? null : (
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

      <UnitModal
        isModalOpen={isUnitModalVisible}
        closeModal={setIsUnitModalVisible}
      />
    </>
  );
}
