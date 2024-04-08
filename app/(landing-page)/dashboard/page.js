import { Chip } from "@mui/joy";
import React from "react";

export default function Dashboard() {
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      flatNumber: "Kingsburry-A / 301",
      status: "Completed",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      flatNumber: "Boston-B / 708",
      status: "Pending",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      flatNumber: "Boston-D / 404",
      status: "Pending",
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      flatNumber: "Belmondo-E / 301",
      status: "Open",
    },
  ];

  return (
    <div>
      <div className="flex pl-3">
        <div className="block text-md font-semibold leading-6 text-gray-600 mr-4 my-3 cursor-pointer ">
          Complaints
        </div>
        <div className="block text-md font-semibold leading-6 text-gray-600 mx-4 my-3 cursor-pointer">
          Owners
        </div>
        <div className="block text-md font-semibold leading-6 text-gray-600 mx-4 my-3 cursor-pointer">
          Tenants
        </div>
        <div className="block text-md font-semibold leading-6 text-gray-600 mx-4 my-3 cursor-pointer">
          Vehicle logs
        </div>
        <div className="block text-md font-semibold leading-6 text-gray-600 mx-4 my-3 cursor-pointer">
          Units
        </div>
        <div className="block text-md font-semibold leading-6 text-gray-600 mx-4 my-3 cursor-pointer">
          Maintenance
        </div>
      </div>

      <div className="flex w-full my-3 bg-slate-50	">
        <div className=" w-1/4 h-40 flex flex-col p-3">
          <div className="block text-sm font-semibold leading-6 text-gray-600">
            Total Complaints
          </div>
          <div className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
            130
          </div>
        </div>
        <div className=" w-1/4 h-40 p-3">
          <div className="block text-sm font-semibold leading-6 text-gray-600">
            Open Complaints
          </div>
          <div className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
            20
          </div>
        </div>
        <div className=" w-1/4 h-40 p-3">
          <div className="block text-sm font-semibold leading-6 text-gray-600">
            Closed Complaints
          </div>
          <div className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
            100
          </div>
        </div>
        <div className=" w-1/4 h-40 p-3">
          <div className="block text-sm font-semibold leading-6 text-gray-600">
            Pending Complaints
          </div>
          <div className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
            10
          </div>
        </div>
      </div>

      <div className="my-10 ">
        <div className="block text-md font-semibold leading-6 text-gray-600 mr-4 my-3 cursor-pointer pl-3  ">
          Recent Activity
        </div>
        <div className="bg-slate-50 h-9 pl-3 py-1 border">Today</div>
        <ul role="list" className="divide-y divide-gray-100 p-3">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {person.flatNumber}
                </p>

                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <Chip>{person.status}</Chip>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
