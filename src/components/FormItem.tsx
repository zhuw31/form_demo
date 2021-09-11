import React, { cloneElement } from "react";

function FormItem({ name, label, children, inputValue, onChange }) {
  const customChild = cloneElement(children, {
    id: name,
    value: inputValue,
    onChange,
  });

  return (
    <div className="form-item">
      <label htmlFor={name}>{label}</label>
      {customChild}
    </div>
  );
}

export default FormItem;
