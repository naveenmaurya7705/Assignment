import React from "react";

const NumberFields = ({ label, name, value, onChange }) => {
  return (
    <div className="numberFields">
      <label>{label} :</label> <br /><br />
      <input
        type="number"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter to the Quantity..!"
        required
      />
    </div>
  );
};

export default NumberFields;
