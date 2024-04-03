import React, { useState } from "react";
import FileUpload from "../fileUpload";
import OutlinedInput from "../OulinedInput";
import TextField from "../TextField";
import StyledButton from "../styledButton";
import Select from "../select";

const OccupantModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    aadhar: null,
    panCard: null,
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    emergencyContact: "",
  });
  const handleChange = (event) => {
    // Handle File

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle Form Submit logic here
    console.log("formData", formData);
  };
  return (
    <>
      <div className="space-y-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 text-sm min-w-96	"
        >
          {/* Personal Details Section */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-10">
              {" "}
              Personal Details
            </h2>

            <div className="grid grid-cols-1 gap-4">
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
                  label="Date Of Birth"
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
                <Select
                  label="Gender"
                  id="gender"
                  name="gender"
                  options={[
                    { id: 1, name: "male" },
                    { id: 2, name: "Female" },
                  ]}
                  nameProperty="name"
                  valueProperty="id"
                  value={formData.gender}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
          {/* Identification Section */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-10">
              Identification
            </h2>
            <div className="grid grid-cols-1  gap-4">
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
          </div>
          {/* Contact Details */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-10">
              Contact Details
            </h2>
            <div className="grid grid-cols-1  gap-4">
              <div className="flex flex-col">
                <OutlinedInput
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
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
          </div>

          <StyledButton
            type="submit"
            label="Submit"
            onClick={handleSubmit}
            icon={null}
          />
        </form>
      </div>
    </>
  );
};

export default OccupantModal;
