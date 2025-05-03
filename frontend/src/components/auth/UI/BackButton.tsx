import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 flex items-center text-gray-600 hover:text-gray-900 transition duration-200"
    >
      <ArrowLeft size={18} className="mr-1" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;