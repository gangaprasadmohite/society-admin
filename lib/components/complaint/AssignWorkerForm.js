import React from "react";
import Select from "../select";

function AssignWorkerForm({ onChange = () => {} }) {
  const workers = [
    {
      id: 1,
      name: "Worker 1",
    },
    {
      id: 2,
      name: "Worker 2",
    },
    {
      id: 3,
      name: "Worker 3",
    },
    {
      id: 4,
      name: "Worker 4",
    },
  ];
  return (
    <div>
      <Select
        label="Assign Worker"
        options={workers}
        nameProperty="name"
        valueProperty="id"
        onSelect={onChange}
      />
    </div>
  );
}

export default AssignWorkerForm;
