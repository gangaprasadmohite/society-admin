"use client";

import SearchBar from "@/lib/components/SearchBar";
import EmployeeTable from "@/lib/components/table/EmployeeTable";
import React from "react";

function Page() {
  return (
    <>
      <div>
        <EmployeeTable />
      </div>
    </>
  );
}

export default Page;
