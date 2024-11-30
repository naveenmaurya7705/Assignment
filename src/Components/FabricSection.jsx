import React from "react";

const FabricSection = ({ fabrics, onAddFabric, onUpdateFabric, onAddColor }) => {
  // Options for dropdowns
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

  const processOptions = ["DYING", "PRINTING", "MOCK UP", "LACES", "SHIFFLY", "WASHING"];
  const stagesOptions = [
    "PURCHASE",
    "SUBMISSION",
    "FOB",
    "BULK",
    "FABRIC AUDIT",
    "PRODUCTION",
    "TOP",
    "WEB",
    "SIZE SET",
  ];

  return (
    <div>
      <h3>Fabric Section</h3>
      {fabrics.map((fabric, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            border: "1px solid #ccc",
            padding: "30px",
            backgroundColor:"antiquewhite"
          }}
        >
          {/* Fabric Name Dropdown */}

          <label>Fabric Name:</label>
          <select
            value={fabric.fabricName}
            onChange={(e) => onUpdateFabric(index, "fabricName", e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
          >
            <option value="">-- Select Fabric --</option>
            {fabricOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Per Piece Requirement */}
          <label>Per Piece Requirement:</label>
          <input
            type="number"
            value={fabric.perPieceRequirement}
            onChange={(e) => {
            const value = parseFloat(e.target.value);
           // Ensure the value is greater than 0
            if (value > 0 || e.target.value === '') {
           onUpdateFabric(index, "perPieceRequirement", e.target.value);
           }
            }}
           min="0.5"
           step="any"
           style={{width:"93%",height:"25px" ,marginBottom:"20px "}}
           required
          />

         
          {/* Choose Unit as Radio Buttons */}
<label>Choose Unit:</label>
<div className="radio-group">
  <label>
    <input
      type="radio"
      name={`unit-${index}`}
      value="M"
      checked={fabric.unit === "M"}
      onChange={() => onUpdateFabric(index, "unit", "M")}
    />
    M
  </label>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <label>
    <input
      type="radio"
      name={`unit-${index}`}
      value="Kg"
      checked={fabric.unit === "Kg"}
      onChange={() => onUpdateFabric(index, "unit", "Kg")}
    />
    Kg
  </label>
</div>


          {/* Processes Section */}
          <label>Processes:</label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {fabric.processes.map((process, idx) => (
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
                <span>{process}</span>
                <button
                  onClick={() =>
                    onUpdateFabric(
                      index,
                      "processes",
                      fabric.processes.filter((p) => p !== process)
                    )
                  }
                  className="x-button"
                 
                >
                  X
                </button>
              </div>
            ))}
            <select
              onChange={(e) => {
                if (e.target.value)
                  onUpdateFabric(index, "processes", [
                    ...fabric.processes,
                    e.target.value,
                  ]);
                e.target.value = ""; // Reset dropdown value after selection
              }}
              style={{ width: "100%", padding: "5px" }}
            >
              <option value="">-- Add Process --</option>
              {processOptions
                .filter((option) => !fabric.processes.includes(option))
                .map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>

          {/* Color and Quantity: */}

          <div>
            <label>Color and Quantity:</label>
            {fabric.colorAndQuantity.map((cq, cqIndex) => (
              <div key={cqIndex} style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  value={cq.color}
                  onChange={(e) =>
                    onUpdateFabric(index, "colorAndQuantity", [
                      ...fabric.colorAndQuantity.slice(0, cqIndex),
                      { ...cq, color: e.target.value },
                      ...fabric.colorAndQuantity.slice(cqIndex + 1),
                    ])
                  }
                  placeholder="Color"
                  required
                />
                <input
                  type="number"
                  value={cq.quantity}
                  onChange={(e) =>
                    onUpdateFabric(index, "colorAndQuantity", [
                      ...fabric.colorAndQuantity.slice(0, cqIndex),
                      { ...cq, quantity: e.target.value },
                      ...fabric.colorAndQuantity.slice(cqIndex + 1),
                    ])
                  }
                  placeholder="Quantity"
                  required
                />
              </div>
            ))}
            <button type="button" onClick={() => onAddColor(index)}>
              Add More Colors and Quantity
            </button>
          </div>

          {/* Stages to Be Skipped Section */}
          <label>Stages to Be Skipped:</label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {fabric.stagesToSkip.map((stage, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f1f1f1",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              >
                <span>{stage}</span>
                <button
                  onClick={() =>
                    onUpdateFabric(
                      index,
                      "stagesToSkip",
                      fabric.stagesToSkip.filter((s) => s !== stage)
                    )
                  }
                      className="x-button"
                >
                  X
                </button>
              </div>
            ))}
            <select
              onChange={(e) => {
                if (e.target.value)
                  onUpdateFabric(index, "stagesToSkip", [
                    ...fabric.stagesToSkip,
                    e.target.value,
                  ]);
                e.target.value = ""; // Reset dropdown value after selection
              }}
              style={{ width: "100%", padding: "5px" }}
            >
              <option value="">-- Add Stage --</option>
              {stagesOptions
                .filter((option) => !fabric.stagesToSkip.includes(option))
                .map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
        </div>
      ))}
      <button type="button" onClick={onAddFabric}>
        Add More Fabrics
      </button>
    </div>
  );
};

export default FabricSection;
