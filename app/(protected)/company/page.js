"use client";

import OutlinedInput from "@/lib/components/OulinedInput";
import TextField from "@/lib/components/TextField";
import PageHeader from "@/lib/components/pageHeader";
import Select from "@/lib/components/select";
import StyledButton from "@/lib/components/styledButton";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Company() {
  const ROUTER = useRouter();

  const [agreed, setAgreed] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleModeChange = (e) => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      <div className="flex justify-between">
        <PageHeader pageTitle="Company" backPath="/" />
        <div className="cursor-pointer">
          <IconButton variant="plain" onClick={handleModeChange}>
            {isEditMode ? <VisibilityIcon /> : <EditIcon />}
          </IconButton>
        </div>
      </div>
      <div className="mt-2 border-t border-gray-100">
        {isEditMode ? (
          <form action="#" method="POST" className="max-w-xl mt-5">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="mt-5 sm:col-span-12">
                <OutlinedInput label="Name" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <TextField label="Address" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <OutlinedInput label="GST" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <Select label="KYC Status" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <OutlinedInput label="KYX Next Review date" />
              </div>
              <div className="mt-5 sm:col-span-12">
                <TextField label="About" />
              </div>
              <div className="mt-5 sm:col-span-12 flex justify-end">
                <StyledButton label="Save" />
              </div>
            </div>
          </form>
        ) : (
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Accent facility management
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                GST
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                CGSEY8723FG
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                KYC Status
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Active
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                KYC Next review date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                12/12/2025
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Contact details
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          Contact Type Email First Name Last Name Contact Number
                          Designation
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          coverletter_back_end_developer.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          4.5mb
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}
