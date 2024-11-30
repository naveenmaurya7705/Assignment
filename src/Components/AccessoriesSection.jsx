import React from "react";

const AccessoriesSection = ({
  accessories,
  onAddAccessory,
  onRemoveAccessory,
}) => {
  // Predefined accessory options
  const accessoryOptions = [
    "WASHCARE LABEL",
    "PRICE TAG",
    "SIZE LABEL",
    "BUTTON",
    "ZIP",
    "HOOK",
  ];

  // Handle adding an accessory
  const handleAddAccessory = (accessory) => {
    // Ensure no duplicates
    if (!accessories.some((item) => item === accessory)) {
      onAddAccessory(accessory);
    }
  };

  return (
    <div style={{ padding:" 20px 10px", marginTop: "20px" ,  backgroundColor: "#e6e2e2e7"}}>
      <h3>Accessories :</h3>

      {/* Display selected accessories */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        {accessories.map((accessory, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            <span>{accessory}</span> {/* Display accessory text */}
            <button
              onClick={() => onRemoveAccessory(accessory)}
              className="x-button"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Dropdown to add more accessories */}
      <select
        onChange={(e) => {
          if (e.target.value) handleAddAccessory(e.target.value);
          e.target.value = ""; // Reset dropdown value after selection
        }}
        style={{
          width: "100%",
          padding: "5px",
          marginTop: "10px",
        }}
      >
        <option value="">-- Add More Accessories --</option>
        {accessoryOptions
          .filter((option) => !accessories.includes(option)) // Exclude already selected accessories
          .map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AccessoriesSection;
