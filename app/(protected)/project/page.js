"use client";

import PageHeader from "@/lib/components/pageHeader";
import { TableTemplateComponent } from "@/lib/components/table";
import { Chip } from "@mui/joy";
import { useRouter } from "next/navigation";
import React from "react";
import { v4 as uuid } from "uuid";

export default function Project() {
  const columns = [
    {
      id: 1,
      header: "Project name",
      key: "projectName",
    },
    {
      id: 2,
      header: "Types",
      key: "types",
      cell: (row) => {
        return row.types.map((type) => (
          <Chip className="mx-1 my-1" color="primary" key={uuid()}>
            {type}
          </Chip>
        ));
      },
    },
    {
      id: 3,
      header: "Developer",
      key: "developer",
    },
    {
      id: 4,
      header: "Amenities",
      key: "amenities",
      cell: (row) => {
        return row.amenities.map((amenity) => (
          <Chip className="mx-1 my-1" color="primary" key={uuid()}>
            {amenity}
          </Chip>
        ));
      },
    },
  ];

  const projects = [
    {
      id: 1,
      projectName: "Pride Kingsburry",
      types: ["Building Complex", "Bunglow Society"],
      developer: "Pride",
      amenities: ["Pool", "Garden"],
    },
    {
      id: 2,
      projectName: "Pride Boston",
      types: ["Building Complex"],
      developer: "Pride",
      amenities: ["Pool", "Garden"],
    },
  ];

  const Router = useRouter();

  return (
    <div>
      <PageHeader pageTitle="Projects" backPath="/" />

      <div>
        <TableTemplateComponent
          columns={columns}
          hasCrudActions={true}
          data={projects}
          onAdd={() => {
            Router.push("/project/0");
          }}
          onEdit={(index) => (e) => {
            let projectId = projects[index]["id"];
            Router.push(`/project/${projectId}`);
          }}
        />
      </div>
    </div>
  );
}
