import React from "react";

const FileUpload = ({ label, name, onChange }) => {
  return (
    <div>
      <h5 className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </h5>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-5">
        <div className="text-center">
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 "
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name={name}
                type="file"
                className="sr-only"
                onChange={onChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
