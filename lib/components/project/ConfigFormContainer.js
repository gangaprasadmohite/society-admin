"use client";

import React, { useEffect, useState } from "react";
import UnitContainer from "./UnitContainer";
import BuildingContainer from "./BuildingContainer";

export default function ConfigFormContainer({ type = "" }) {
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    if (type.length) {
      setProjectType(type);
    }
  }, [type]);

  const getProjectForm = (type) => {
    let formComponent = <></>;
    switch (type) {
      case "bunglowSociety":
        break;

      case "buildingComplex":
        break;

      case "privateBunglow":
        break;

      case "mall":
        break;

      case "shop":
        break;

      case "officeComplex":
        break;

      default:
        break;
    }

    return formComponent;
  };

  if (projectType.length) {
    if (projectType === "bunglowSociety" || projectType === "privateBunglow") {
      return (
        <div style={{ width: "800px" }}>
          <UnitContainer />
        </div>
      );
    }

    if (
      projectType === "buildingComplex" ||
      projectType === "mall" ||
      projectType === "officeComplex"
    ) {
      return (
        <div style={{ width: "800px" }}>
          <BuildingContainer />
        </div>
      );
    }
  }
}
