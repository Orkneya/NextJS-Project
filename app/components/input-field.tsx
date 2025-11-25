"use client";

import React from "react";
import { Field } from "formik";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base text-gray-900 ">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 
        border border-gray-300 rounded
        shadow-[0_2px_4px_-2px_rgba(85,105,135,0.02),0_6px_10px_-2px_rgba(85,105,135,0.04)]
        focus:ring-2 focus:ring-blue-500
        text"
      />
    </div>
  );
}


