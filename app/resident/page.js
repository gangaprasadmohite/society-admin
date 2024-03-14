"use client";

import SearchBar from "@/lib/components/SearchBar";
import ResidentsTable from "@/lib/components/table/ResidentsTable";
import { Input } from "@mui/joy";
import React from "react";

function Page() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SearchBar />

        <ResidentsTable />
      </div>
    </>
  );
}

export default Page;
