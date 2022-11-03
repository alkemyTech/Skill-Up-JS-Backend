import React from "react";

const FormItem = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  labelText,
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{labelText || name}</label>
      </div>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormItem;
