import React from "react";
import {useField} from "formik";

const FormItem = ({ labelText, ...props }) => {
  // hook de formik para usar sus propiedades
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label>{labelText}</label>
      </div>
      <input
        // propiedades onBlur, onChange, value
        {...field}
        // propiedades propias del input name, type, placeholder
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default FormItem;