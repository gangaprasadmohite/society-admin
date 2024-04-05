import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  IconButton,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import OutlinedInput from "../OulinedInput";
import Select from "../select";
import AddIcon from "@mui/icons-material/Add";
import { produce } from "immer";
import { v4 as uuid } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FloorForm({ numberOfFloors = 9 }) {
  const [totalFloors, setTotalFloors] = useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [floors, setFloors] = useState([]);

  const [units, setUnits] = useState([
    {
      id: 1,
      name: "1-BHK-500 sqft.",
    },
    {
      id: 2,
      name: "1-BHK-650 sqft.",
    },
    {
      id: 3,
      name: "2-BHK-1000 sqft.",
    },
  ]);

  useEffect(() => {
    if (numberOfFloors > 0) {
      setTotalFloors(numberOfFloors);

      let nextState = [];

      for (let i = 1; i <= numberOfFloors; i++) {
        let floor = {
          id: i,
          floorNumber: i,
          units: [
            {
              id: 1,
              unitNumber: "A-101",
              unit: {
                id: 1,
                name: "1-BHK-500 sqft.",
              },
            },
          ],
        };
        nextState.push(floor);
      }

      setFloors(nextState);
    }
  }, [numberOfFloors]);

  const handleAddUnit = (floorIndex, unitIndex) => (event) => {
    let nextState = produce(floors, (draft) => {
      draft[floorIndex]["units"].splice(unitIndex + 1, 0, {
        id: uuid(),
        unitNumber: "",
        unit: null,
      });
    });

    setFloors(nextState);
  };

  const handleDeleteUnit = (floorIndex, unitIndex) => (event) => {
    let nextState = produce(floors, (draft) => {
      draft[floorIndex]["units"].splice(unitIndex, 1);
    });

    setFloors(nextState);
  };

  return (
    <div style={{ width: "800px" }}>
      <div>
        <h4 className="text-base font-semibold leading-7 text-gray-900 border-b pb-3 mb-0">
          Add Floors
        </h4>
      </div>

      <div>
        <AccordionGroup disableDivider>
          {floors.map((floor, fIndex) => (
            <Accordion
              expanded={currentIndex === fIndex}
              onChange={(event, expanded) => {
                setCurrentIndex(expanded ? fIndex : null);
              }}
              key={floor.id}
            >
              <AccordionSummary>{`${floor.floorNumber} ( ${floor.units.length} units )`}</AccordionSummary>
              <AccordionDetails>
                {/* <p>Add Units</p> */}
                {floor.units.map((unit, uIndex) => (
                  <div className="flex items-end" key={unit.id}>
                    <div className="mx-5">
                      <OutlinedInput
                        placeholder="Enter Unit Number"
                        value={unit.unitNumber}
                      />
                    </div>
                    <div className="mx-5">
                      <Select
                        placeholder="Select Unit"
                        value={unit.unit}
                        nameProperty="name"
                        valueProperty="id"
                        options={units}
                      />
                    </div>
                    <div className="mx-5">
                      <IconButton
                        size="sm"
                        variant="soft"
                        onClick={handleAddUnit(fIndex, uIndex)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton
                        size="sm"
                        variant="soft"
                        onClick={handleDeleteUnit(fIndex, uIndex)}
                        color="danger"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </div>

      <div></div>
    </div>
  );
}
