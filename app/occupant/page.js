"use client";
import React, { useState } from "react";
import SearchBar from "@/lib/components/SearchBar";
import OccupantTable from "@/lib/components/table/OccupantTable";

const page = () => {
  const [data, setData] = useState({ id: 1, name: "harshad" });
  return (
    <>
      <div>
        <OccupantTable data={data} />
      </div>
    </>
  );
};

export default page;
