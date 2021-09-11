import React from "react";

const Input = ({ onChange, id, value }) => {
  return (
    <input
      id={id}
      onChange={(e) => onChange(id, e.target.value)}
      value={value}
      type="text"
    />
  );
};

export default Input;
