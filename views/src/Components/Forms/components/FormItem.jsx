import React from "react";
import { useField } from "formik";

const FormItem = ({ labelText, ...props }) => {
  // hook de formik para usar sus propiedades
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label className="block mt-3">{labelText}</label>
      </div>
      <input
        // propiedades onBlur, onChange, value
        {...field}
        // propiedades propias del input name, type, placeholder
        {...props}
        // className={meta.touched && meta.error ? "input-error" : ""}
        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
          meta.touched && meta.error ? "border-red-700 border-2" : ""
        }`}
      />
      {meta.touched && meta.error && <div className="text-red-700">{meta.error}</div>}
    </>
  );
};

export default FormItem;
