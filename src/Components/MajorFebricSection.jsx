import React from "react";

const MajorFabricSection = ({ majorFabric, setMajorFabric }) => {
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

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Choose Major Fabric</h3>
      <label>Major Fabric:</label>
      <select
        value={majorFabric}
        onChange={(e) => setMajorFabric(e.target.value)}
        style={{ width: "100%", padding: "5px", marginTop: "10px" }}
      >
        <option value="None">None</option>
        {fabricOptions.map((fabric, idx) => (
          <option key={idx} value={fabric}>
            {fabric}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MajorFabricSection;


