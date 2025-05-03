"use client";

import React, { useState } from "react";
import FormInput from "../UI/FormInput";
import FormPasswordInput from "../UI/FormPasswordInput";
import { useRouter } from "next/navigation";

const LoginStep = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    registrationNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    registrationNumber: "",
    password: "",
  });

  const onForgotPassword = () => {
    router.push("/auth/forgot-password");
  };

  const onSignUp = () => {
    router.push("/auth/register");
  };

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
    <div className="max-w-md w-full mx-auto animate-fadeIn">
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
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 mb-5 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Login
          </button>

          <p className="text-center text-sm flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <p>Don&apos;t have an account?</p>
              <button
                type="button"
                onClick={onSignUp}
                className="text-primary hover:text-primary/90 font-medium"
              >
                Sign Up
              </button>
            </div>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-primary hover:text-primary/90 font-medium"
            >
              Forgot Password
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginStep;
