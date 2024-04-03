import React, { useState } from "react";

function EmployeeForm() {
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
    const file = files ? files[0] : null; // Get the first file from the selection

    // Optional file validation (example for PDF type)
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
    // You can send the form data to your backend here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Personal Details Section */}
      <h2 className="text-xl font-bold mb-2">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name:
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
          <label htmlFor="dateOfBirth" className="mb-1">
            Date of Birth:
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
            Address:
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
            Gender:
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
      <h2 className="text-xl font-bold mb-2">Identification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="aadhar" className="mb-1">
            Aadhar Card:
          </label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="panCard" className="mb-1">
            PAN Card:
          </label>
          <input
            type="file"
            id="panCard"
            name="panCard"
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="mb-1">
            Phone Number:
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
            Alternate Phone Number:
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
            Emergency Contact:
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

      {/* Department Section */}
      <h2 className="text-xl font-bold mb-2">Department</h2>
      <div className="flex flex-col">
        <label htmlFor="department" className="mb-1">
          Department:
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
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

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        Submit Form
      </button>
    </form>
  );
}