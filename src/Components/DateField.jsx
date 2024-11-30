import React from "react";

const DateField = ({ label, name, defaultValue }) => {
  return (
    <div className="date">
      <label>{label}: </label><br /><br />
      <input type="date" name={name} defaultValue={defaultValue} required />
    </div>
  );
};

export default DateField;
