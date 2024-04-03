import React, { useState } from "react";
import { Button, FormHelperText, Input, DialogContent } from "@mui/joy";
import FileUpload from "../fileUpload";
import OutlinedInput from "../OulinedInput";
import TextField from "../TextField";
import Drawer from "../drawer/Drawer";

const EmployeeDrawer = ({ open, handleOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    aadhar: null,
    panCard: null,
    phoneNumber: "",
    alternatePhoneNumber: "",
    emergencyContact: "",
    department: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    const file = files ? files[0] : null;
    if (file && file.type !== "application/pdf") {
      alert("Please upload a PDF file for PAN Card.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <Drawer open={open} handleOpen={handleOpen} onClose={handleClose}>
      <DialogContent>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-4 text-sm"
        >
          <h4 className="text-base font-semibold leading-7 text-gray-900">
            Personal Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <OutlinedInput
                label="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <OutlinedInput
                label="Date of Birth"
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <TextField
                label="Address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <h4 className="text-base font-semibold leading-7 text-gray-900">
            Identification
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FileUpload
              label="Aadhar Card"
              name="aadhar"
              onChange={handleChange}
            />
            <FileUpload
              label="PAN Card"
              name="panCard"
              onChange={handleChange}
            />
          </div>
          <h4 className="text-base font-semibold leading-7 text-gray-900">
            Contact Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <OutlinedInput
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <div className="flex flex-col">
              <OutlinedInput
                label="Alternate Phone Number"
                type="tel"
                id="alternatePhoneNumber"
                name="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="flex flex-col">
              <OutlinedInput
                label="Emergency Contact"
                type="tel"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
          </div>

          <h4 className="text-base font-semibold leading-7 text-gray-900">
            Department
          </h4>
          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="px-3 py-2 mt-2 w-96/2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="humanResources">Human Resources</option>
              {/* Add more department options as needed */}
            </select>
          </div>

          <Button
            type="submit"
            sx={{ alignSelf: "flex-end" }}
            // className="px-4 py-2 bg-blue-500 text-white  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Submit Form
          </Button>
        </form>
      </DialogContent>
    </Drawer>
  );
};

export default EmployeeDrawer;
