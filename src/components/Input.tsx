import React from "react";

export interface InputProps {
  onChange?: (value: string) => void;
  id?: string;
  value?: string;
}

const Input = ({ onChange, id, value }: InputProps) => {
  return (
    <input
      id={id}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
      type="text"
    />
  );
};

export default Input;
