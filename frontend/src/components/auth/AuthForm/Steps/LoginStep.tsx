import React, { useState } from "react";
import FormInput from "../../UI/FormInput";
import FormPasswordInput from "../../UI/FormPasswordInput";
import ContinueButton from "../../UI/ContinueButton";

interface LoginStepProps {
  onForgotPassword: () => void;
}

const LoginStep: React.FC<LoginStepProps> = ({ onForgotPassword }) => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    registrationNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration number is required";
      valid = false;
    } else {
      newErrors.registrationNumber = "";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log("Login attempt:", formData);
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Log in to your student dashboard
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <FormPasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          error={errors.password}
          required
        />

        <ContinueButton />

        <p className="text-center text-sm">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-primary hover:text-primary/90 font-medium"
          >
            Forgot Password
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginStep;
