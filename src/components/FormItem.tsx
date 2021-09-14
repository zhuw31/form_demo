import { cloneElement } from "react";

export interface FormItemProps {
  name: string;
  label: string;
  inputValue: string;
  onChange: (n: string, v: string) => void;
  children: JSX.Element;
}

function FormItem({
  name,
  label,
  children,
  inputValue,
  onChange,
}: FormItemProps) {
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
