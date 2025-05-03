import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface FormDatePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  yearOnly?: boolean;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  required,
  yearOnly = false,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type="date"
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-2 pr-10 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200`}
          required={required}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Calendar size={18} className="text-gray-500" />
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormDatePicker;
