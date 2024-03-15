"use client";

import SearchBar from "@/lib/components/SearchBar";
import EmployeeTable from "@/lib/components/table/EmployeeTable";
import React from "react";

function Page() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SearchBar />
        <EmployeeTable />
      </div>
    </>
  );
}

export default Page;
