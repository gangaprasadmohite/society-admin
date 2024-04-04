import { useState } from "react";
import OutlinedInput from "../OulinedInput";
import TextField from "../TextField";
import FileUpload from "../fileUpload";
import Select from "../select";
import StyledButton from "../styledButton";

const EmployeeForm = () => {
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
    console.log("Form submitted:", formData);
  };
  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ];
  const departments = [
    { id: 1, name: "Gardening" },
    { id: 2, name: "Landscaping" },
    { id: 3, name: "Plumbing" },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-4 text-sm min-w-96"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <h4 className="text-base font-semibold leading-7 text-gray-900 mb-10">
          Personal Details
        </h4>
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
            <Select
              label="Gender"
              onChange={handleChange}
              value={formData.gender}
              options={genders}
            />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h4 className="text-base font-semibold leading-7 text-gray-900 mb-10">
          Identification
        </h4>
        <div className="grid grid-cols-1 gap-4">
          <FileUpload
            label="Aadhar Card"
            name="aadhar"
            onChange={handleChange}
          />
          <FileUpload label="PAN Card" name="panCard" onChange={handleChange} />
        </div>
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h4 className="text-base font-semibold leading-7 text-gray-900 mb-10">
          Contact Details
        </h4>
        <div className="grid grid-cols-1 gap-4">
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

      <div className="border-b border-gray-900/10 pb-12">
        <h4 className="text-base font-semibold leading-7 text-gray-900 mb-10">
          Department
        </h4>
        <div className="flex flex-col">
          <Select
            label="Department"
            value={formData.department}
            onChange={handleChange}
            options={departments}
          />
        </div>
      </div>

      <StyledButton
        type="submit"
        label="Submit"
        onClick={handleSubmit}
        icon={null}
      />
    </form>
  );
};

export default EmployeeForm;
