import React from "react";

const DateField = ({ label, name, defaultValue }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" name={name} defaultValue={defaultValue} required />
    </div>
  );
};

export default DateField;
