import React from "react";

const ContinueButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
    >
      Continue
    </button>
  );
};

export default ContinueButton;
