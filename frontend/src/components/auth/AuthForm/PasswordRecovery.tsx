"use client";

import React, { useState } from "react";
import { validateEmail } from "../../../utils/validation";
import FormInput from "../UI/FormInput";
import { useRouter } from "next/navigation";

const PasswordRecoveryStep = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    registrationNumber: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    registrationNumber: "",
  });

  const onLogin = () => {
    router.push("/auth/login");
  };

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
    <div className="max-w-md w-full mx-auto animate-fadeIn">
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

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-4 py-3 mb-5 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Reset Password
          </button>

          <p className="text-center text-sm">
            <button
              type="button"
              onClick={onLogin}
              className="text-primary hover:text-primary/90 font-medium"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecoveryStep;
