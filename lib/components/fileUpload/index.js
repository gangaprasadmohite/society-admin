import React, { useRef } from "react";
import StyledButton from "../styledButton";
import UploadIcon from "@mui/icons-material/Upload";

const FileUpload = ({ label = "", name = "", onChange = () => {} }) => {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    inputRef.current.click();
  };

  const handleFileUpload = (e) => {
    onChange(e.target.files);
  };

  return (
    <div>
      <h5 className="block text-sm font-medium leading-6 text-gray-900 mb2">
        {label}
      </h5>
      <div className="text-center">
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <StyledButton
            label="Upload"
            icon={<UploadIcon />}
            onClick={handleClick}
          />
          <input
            id="file-upload"
            name={name}
            ref={inputRef}
            style={{ visibility: "hidden" }}
            type="file"
            className="sr-only"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
