import React from "react";

const FileUpload = ({ label, name, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default FileUpload;
