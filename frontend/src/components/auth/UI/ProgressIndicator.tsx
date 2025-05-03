import React from "react";

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="mb-8">
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary/90 bg-blue-100">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-primary/90">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
