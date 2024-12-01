import React, { useState } from "react";

const ChinaFabricSection = ({
  fabrics,
  chinaFabricPresent,
  setChinaFabricPresent,
  chinaFabrics,
  setChinaFabrics,
}) => {
  // Predefined fabric options
  const fabricOptions = [
    "BAG VOILE",
    "WISTERIA VOLIE",
    "SHEETING",
    "WINDOWPANE GAUZ",
    "FP001",
    "WAFFEL",
    "2X2 RIB",
    "FRENCH TERRY",
    "VISCOUS LYCRA",
    "OTHER KNITS",
    "LACES",
    "SHIFILLI",
    "SPECIAL FABRICS",
    "IMPORTED FABRICS",
    "CHINA LACE",
  ];

  // Handle adding a fabric
  const handleAddFabric = (fabric) => {
    if (!chinaFabrics.includes(fabric)) {
      setChinaFabrics([...chinaFabrics, fabric]);
    }
  };

  // Handle removing a fabric
  const handleRemoveFabric = (fabric) => {
    setChinaFabrics(chinaFabrics.filter((item) => item !== fabric));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Is China Fabric Present?</h3>
    

<div style={{ margin: "10px 0", fontFamily: "Arial, sans-serif" }}>
<label
  className="Radio-label"
>
  <input
    type="radio"
    name="chinaFabricPresent"
    value="Yes"
    checked={chinaFabricPresent === true}
    onChange={() => setChinaFabricPresent(true)}
    style={{ marginRight: "5px", accentColor: "#007bff" }}
  />
  Yes
</label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<label
  className="Radio-label"
>
  <input
    type="radio"
    name="chinaFabricPresent"
    value="No"
    checked={chinaFabricPresent === false}
    onChange={() => {
      setChinaFabricPresent(false);
      setChinaFabrics([]); // Clear the selected fabrics if "No" is chosen
    }}
    style={{ marginRight: "5px", accentColor: "#007bff" }}
  />
  No
</label>
</div>


      {/* Conditional rendering of Select China Fabrics */}
      {chinaFabricPresent && (
        <div style={{ marginTop: "15px",backgroundColor: "#e6e2e2e7" }}>
          <h4>Selected China Fabrics:</h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // Allow items to wrap if too many
              gap: "10px", // Add spacing between items
              marginBottom: "10px",
            }}
          >
            {/* Display Selected Fabrics in a single row */}
            {chinaFabrics.map((fabric, idx) => (
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
                <span>{fabric}</span>
                <button
                  onClick={() => handleRemoveFabric(fabric)}
                  className="x-button"
                >X
                </button>
              </div>
            ))}
          </div>

          {/* Dropdown to Add More */}
          <select
            onChange={(e) => {
              if (e.target.value) handleAddFabric(e.target.value);
              e.target.value = ""; // Reset dropdown value after selection
            }}
            style={{
              width: "100%",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            <option value="">-- Add More Fabrics --</option>
            {fabricOptions
              .filter((fabric) => !chinaFabrics.includes(fabric)) // Exclude already selected fabrics
              .map((fabric, idx) => (
                <option key={idx} value={fabric}>
                  {fabric}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ChinaFabricSection;
