import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          id={name}
          onClick={toggleDropdown}
          className={`w-full px-3 py-2 text-left border ${
            error ? "border-red-500" : "border-gray-300"
          } ${
            disabled ? "bg-gray-100 text-gray-500" : "bg-white text-gray-900"
          } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 flex justify-between items-center`}
          disabled={disabled}
        >
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {value || "Select..."}
          </span>
          <ChevronDown size={18} className="text-gray-500" />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer px-3 py-2 hover:bg-blue-50 ${
                  value === option
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-900"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormSelect;
