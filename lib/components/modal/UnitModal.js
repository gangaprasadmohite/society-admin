"use client";

import { getUserFromLocalStorage } from "@/lib/helperFunctions";
// import { getClientById, saveClient } from "@/lib/services/client";
// import { clientSchema } from "@/lib/validation";
import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { produce } from "immer";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import OutlinedInput from "../OulinedInput";
import TextField from "../TextField";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import Select from "../select";

const UnitModal = ({ isModalOpen = false, closeModal = () => {} }) => {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => closeModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <form className="space-y-6">
                    <div>
                      <OutlinedInput label="Unit name" />
                    </div>
                    <div>
                      <Select
                        label="Unit type"
                        options={[
                          { id: 1, name: "Residential" },
                          { id: 2, name: "Commercial" },
                        ]}
                      />
                    </div>
                    <div>
                      <OutlinedInput label=" Gross Lettable Area (Built up area)" />
                    </div>
                    <div>
                      <OutlinedInput label="Net Lettable Area (Carpet area)" />
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1",
                      }}
                    >
                      <Button
                        onClick={() => {
                          closeModal(false);
                        }}
                        sx={{ marginRight: "10px" }}
                        variant="soft"
                      >
                        Save
                      </Button>

                      <Button
                        onClick={() => {
                          closeModal(false);
                        }}
                        variant="soft"
                        color="danger"
                      >
                        Cancel
                      </Button>
                    </Box>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UnitModal;
