import React from "react";

const NumberFields = ({ label, name, value, onChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
        required
      />
    </div>
  );
};

export default NumberFields;
