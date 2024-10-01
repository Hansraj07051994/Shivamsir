import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import close and toggle icons
import { Select } from "antd";
// Submit Button Function Start
const FormTna = () => {
  const [formData, setFormData] = useState({
    orderReceivedDate: "",
    orderShipDate: "",
    machine: "", // Add machine to formData
  });

  const [selectedFabric, setSelectedFabric] = useState(""); // Change to single fabric
  const [showSelect, setShowSelect] = useState(false); // To show/hide the select options
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    console.log("Selected Fabric: ", selectedFabric);
    console.log('Selected Fabric Processes:', selectedProcesses);

    // Clear form data
    setFormData({
      orderReceivedDate: "",
      orderShipDate: "",
      machine: "",
    });
    setSelectedFabric("");
    setSuccessMessage("Your form was submitted successfully!"); // Set success message

    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  // Fabric Select Function Code Start
  const fabricData = [
    { id: "fp001", name: "Windowpane Gauze" },
    { id: "fp002", name: "Checkered Cotton" },
    { id: "fp003", name: "Polka Dot" },
    { id: "fp004", name: "Denim Fabric" },
  ];

  const handleFabricSelect = (id) => {
    setSelectedFabric(id); // Set the selected fabric
    setShowSelect(false); // Hide the options once a selection is made
  };

  const removeFabric = () => {
    setSelectedFabric(""); // Remove the selected fabric
  };

  // Toggle function for showing/hiding fabric select input
  const toggleSelectOptions = () => {
    setShowSelect(!showSelect);
  };
  // Fabric Select Function Code End
  // follow process function code start
  const fabricProcesses = [
    "First of Bulk",
    "Purchase",
    "Submission",
    "Fob",
    "Bulk",
    "Buyer Approval",
    "Fit",
    "PP",
    "Size Set",
    "Top",
    "Web",
    "Fabric Audit",
    "Production",
    "Intial",
    "Mid",
    "Final",
    "Dkc Final",
  ];
  
  // Create options from the fabricProcesses array
  const options = fabricProcesses.map((process) => ({
    value: process.toLowerCase().replace(/\s/g, '-'),
    label: process,
  }));
  const [selectedProcesses, setSelectedProcesses] = useState([]);

  // Handle change event
  const handleChange = (value) => {
    setSelectedProcesses(value); // Update selected processes
  };
  // follow process function code end
   // Color  Select Function Code Start
   const [color, setColor] = useState(''); // State to hold the color input
   const [displayColor, setDisplayColor] = useState(''); // State to hold the color to display
 
   // Handle input change for color input
   const handleColorInputChange = (e) => {
     setColor(e.target.value); // Update color state with the input value
   };
 
   // Handle button click to show the color
   const handleShowColor = () => {
     console.log(`Selected Color: ${color}`); // Log the selected color to the console
     setDisplayColor(color); 
   }; // Color Select Function Code End
  return (
    <div className="container mx-24 mt-4">
      <h1 className="font-serif text-4xl font-extrabold flex justify-center">
        NEW ORDER TNA FORM
      </h1>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-500 text-white text-center p-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        {/* Order Received and Ship Date */}
        <div className="flex justify-between items-start mt-6">
          <div className="w-1/2 flex justify-start mr-4">
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Order Received Date
              </label>
              <input
                id="datepicker-range-start"
                name="orderReceivedDate"
                type="date"
                value={formData.orderReceivedDate}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="w-full">
              <label className="block mb-2 font-medium">Order Ship Date</label>
              <input
                id="datepicker-range-end"
                name="orderShipDate"
                type="date"
                value={formData.orderShipDate}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Production Per Machine */}
        <div className="mt-4">
          <label className="block mb-2 font-medium">
            Production Per Machine per
          </label>
          <input
            id="perday_machine_production"
            name="machine"
            type="number"
            value={formData.machine}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Select Fabric Code Start */}
        <div className="mt-4">
          <h2 className="font-medium mb-2">Select Fabric</h2>
          <div className="flex items-center">
            <input
              type="text"
              value={
                fabricData.find((f) => f.id === selectedFabric)?.name ||
                "Click to select fabric"
              }
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-pointer"
              onClick={toggleSelectOptions} // Toggle select options on input click
            />
            <button
              type="button"
              onClick={toggleSelectOptions} // Toggle select options
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              {showSelect ? "Hide" : "Show"}
            </button>
          </div>

          {showSelect && (
            <div className="mt-2 bg-white border border-gray-300 rounded-lg p-2">
              {fabricData.map((fabric) => (
                <div
                  key={fabric.id}
                  className={`cursor-pointer p-2 ${
                    selectedFabric === fabric.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleFabricSelect(fabric.id)}
                >
                  {fabric.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {/*select fabric in meter/kg start*/}
        <div className="mt-6">
          <label>
            Fabric Required for Making A Single Piece of Garments (Meter/Kg)
          </label>

          <div className="flex items-center">
            {/* Input for fabric quantity */}
            <input
              id="total_use_fabric"
              name="total_use_fabric"
              type="number"
              value={formData.total_use_fabric}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {/* Container for radio buttons (Meter/Kg) */}
            <div className="flex border border-gray-300 rounded-r-lg bg-gray-50 p-2.5">
              <div className="flex items-center mr-2">
                <input
                  type="radio"
                  id="fabric_in_meter"
                  name="fabric_unit"
                  value="Meter"
                  onChange={handleInputChange}
                  checked={formData.fabric_unit === "Meter"}
                  className="mr-1"
                />
                <label
                  htmlFor="fabric_in_meter"
                  className="text-sm text-gray-700"
                >
                  Meter
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="fabric_in_kg"
                  name="fabric_unit"
                  value="Kg"
                  onChange={handleInputChange}
                  checked={formData.fabric_unit === "Kg"}
                  className="mr-1"
                />
                <label htmlFor="fabric_in_kg" className="text-sm text-gray-700">
                  Kg
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*select fabric in meter/kg End*/}

        {/* Fabric Process code start */}
        <div className="mt-6">
      <Select
        mode="tags"
        style={{ width: '100%', height: '45px' }}
        placeholder="Select Fabric Processes"
        onChange={handleChange}
        options={options}
      />
      </div>
      {/* Fabric Process code End */}
            {/* Color  code start */}
            <div className="mt-4">
          <label className="block mb-2 font-medium">Select Color</label>
          <input
            type="text"
            value={color}
            onChange={handleColorInputChange}
            placeholder="Enter color name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          <button
            type="button"
            onClick={handleShowColor}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Show Color
          </button>
          {displayColor && (
            <div className="mt-2">Selected Color: {displayColor}</div>
          )}
        </div>
            {/* Color code end */}

        {/* selected fabric code start */}
        <h3 className="mt-4">Selected Fabric:</h3>
        {selectedFabric && (
          <div className="flex items-center bg-gray-200 rounded-full px-2 py-1 mb-2">
            {fabricData.find((f) => f.id === selectedFabric)?.name}
            <FaTimes
              onClick={removeFabric}
              className="ml-2 cursor-pointer text-red-500"
              title="Remove"
            />
          </div>
        )}
        {/* selected fabric code end */}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTna;
