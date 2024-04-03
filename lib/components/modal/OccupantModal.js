import React, { useState } from "react";
import FileUpload from "../fileUpload";

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
    const { name, value, type, files } = event.target;

    // Handle File
    if (type === "file") {
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle Form Submit logic here
    console.log("formData", formData);
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 text-sm"
        >
          {/* Personal Details Section */}
          <h4 className="text-lg font-medium font-serif mb-2">
            Personal Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
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
              <label htmlFor="address" className="mb-1">
                Date Of Birth
              </label>
              <input
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
              <label htmlFor="address" className="mb-1">
                Address
              </label>
              <textarea
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
              <label htmlFor="gender" className="mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* Identification Section */}
          <h4 className="text-lg font-medium font-serif mb-2">
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
          <h4 className="text-lg font-medium font-serif mb-2">
            Contact Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
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
              <label htmlFor="phoneNumber" className="mb-1">
                Phone Number
              </label>
              <input
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
              <label htmlFor="alternatePhoneNumber" className="mb-1">
                Alternate Phone Number
              </label>
              <input
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
              <label htmlFor="emergencyContact" className="mb-1">
                Emergency Contact
              </label>
              <input
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

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default OccupantModal;
