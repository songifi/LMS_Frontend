import React, { useState, useRef } from "react";
import { Upload, Check, X } from "lucide-react";

interface FormFileUploadProps {
  label: string;
  name: string;
  onChange: (file: File | null) => void;
  error?: string;
  required?: boolean;
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({
  label,
  name,
  onChange,
  error,
  required,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    setSelectedFile(file);
    onChange(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        id={name}
        name={name}
        onChange={handleFileChange}
        className="hidden"
        required={required}
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
        className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-primary bg-blue-50"
            : error
            ? "border-red-300 bg-red-50"
            : selectedFile
            ? "border-green-300 bg-green-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
      >
        {selectedFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Check size={18} className="text-green-500" />
              <span className="text-sm text-gray-700 truncate max-w-[180px]">
                {selectedFile.name}
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="text-gray-500 hover:text-red-500 p-1"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Upload className="h-8 w-8 text-gray-400" />
            <span className="text-sm text-gray-500">
              Choose File(s) or drop here
            </span>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormFileUpload;
