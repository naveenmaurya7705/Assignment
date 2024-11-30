import React, { useState } from "react";

const TrimsSection = () => {
  // State to manage trims
  const [trims, setTrims] = useState([""]); // Initially one dropdown visible

  // Options for the dropdown
  const trimOptions = [
    "LABEL COPPER",
    "TAG",
    "STICKER",
    "POLY BAG",
    "STITCHING THREAD",
  ];

  // Function to add a new trim
  const addTrim = () => {
    setTrims([...trims, ""]); // Add an empty trim
  };

  // Function to update a specific trim
  const updateTrim = (index, value) => {
    const updatedTrims = [...trims];
    updatedTrims[index] = value;
    setTrims(updatedTrims);
  };

  // Function to remove a specific trim
  const removeTrim = (index) => {
    const updatedTrims = trims.filter((_, idx) => idx !== index);
    setTrims(updatedTrims);
  };

  return (
    <div>
      <h3>Trims</h3>
      {trims.map((trim, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Dropdown for trims */}
          <select
            value={trim}
            onChange={(e) => updateTrim(index, e.target.value)}
            style={{
              padding: "5px",
              width: "200px",
              marginRight: "10px",
            }}
          >
            <option value="">-- Select Trim --</option>
            {trimOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Remove button */}
          <button
            type="button"
            onClick={() => removeTrim(index)}
            style={{
              padding: "5px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "3px",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add More Trims button */}
      <button
        type="button"
        onClick={addTrim}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "3px",
        }}
      >
        Add More Trims
      </button>
    </div>
  );
};

export default TrimsSection;
