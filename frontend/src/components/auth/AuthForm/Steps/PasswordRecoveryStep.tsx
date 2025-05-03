import React, { useState } from "react";
import FormInput from "../../UI/FormInput";
import ContinueButton from "../../UI/ContinueButton";
import BackButton from "../../UI/BackButton";
import { validateEmail } from "@/utils/validation";

interface PasswordRecoveryStepProps {
  onBack: () => void;
}

const PasswordRecoveryStep: React.FC<PasswordRecoveryStepProps> = ({
  onBack,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    registrationNumber: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    registrationNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration number is required";
      valid = false;
    } else {
      newErrors.registrationNumber = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle password recovery logic here
      console.log("Password recovery request:", formData);
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <BackButton onClick={onBack} />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Recover Password
      </h2>
      <p className="text-gray-600 mb-6">
        Enter your school email and registration number to recover your password
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@school.edu"
          error={errors.email}
          required
        />

        <FormInput
          label="Registration Number"
          name="registrationNumber"
          type="text"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="U12MB2033"
          error={errors.registrationNumber}
          required
        />

        <ContinueButton />

        <p className="text-center text-sm">
          <button
            type="button"
            onClick={onBack}
            className="text-primary hover:text-primary/90 font-medium"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default PasswordRecoveryStep;
