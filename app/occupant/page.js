"use client";
import React from "react";
import SearchBar from "@/lib/components/SearchBar";
import OccupantTable from "@/lib/components/table/OccupantTable";

const page = () => {
  return (
    <>
      <div>
        <SearchBar />
        <OccupantTable />
      </div>
    </>
  );
};

export default page;
