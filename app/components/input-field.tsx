import React from "react";

export interface InputFieldProps {
  label?: string;
  // id: number;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900 ">
          {label}
        </label>
      )}
    </div>
  );
}
