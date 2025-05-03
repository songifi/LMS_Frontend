import React, { useState } from "react";
import FormInput from "../../UI/FormInput";
import FormPasswordInput from "../../UI/FormPasswordInput";
import ContinueButton from "../../UI/ContinueButton";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/validation";
import { useRouter } from "next/navigation";

interface RegistrationStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
}

const RegistrationStep: React.FC<RegistrationStepProps> = ({
  formData,
  updateFormData,
  onNext,
}) => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
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

    if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      valid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const onLogin = () => {
    router.push("/auth/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Registration (New Student)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          error={errors.email}
          required
        />

        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+2348066755057"
          error={errors.phoneNumber}
          required
        />

        <FormPasswordInput
          label="Create Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          error={errors.password}
          required
        />

        <FormPasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Password"
          error={errors.confirmPassword}
          required
        />

        <ContinueButton />

        <p className="text-center text-sm text-gray-600 mt-6">
          Not a new student?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="text-primary hover:text-primary/90 font-medium"
          >
            Log In
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegistrationStep;
