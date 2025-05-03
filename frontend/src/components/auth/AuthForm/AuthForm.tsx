"use client";

import React, { useState } from "react";
import RegistrationStep from "./Steps/RegistrationStep";
import ProgramSelectionStep from "./Steps/ProgramSelectionStep";
import PersonalInfoStep from "./Steps/PersonalInfoStep";
import EducationHistoryStep from "./Steps/EducationHistoryStep";
import DocumentUploadStep from "./Steps/DocumentUploadStep";
import LoginStep from "./Steps/LoginStep";
import PasswordRecoveryStep from "./Steps/PasswordRecoveryStep";
import FormSidebar from "../UI/FormSidebar";
import ProgressIndicator from "../UI/ProgressIndicator";

type FormMode = "login" | "register" | "recovery";

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<FormMode>("login");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    degreeType: "",
    faculty: "",
    department: "",
    courseOfStudy: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    stateOfOrigin: "",
    lgaOfOrigin: "",
    contactAddress: "",
    previousInstitution: "",
    qualificationObtained: "",
    yearOfGraduation: "",
    documents: {
      birthCertificate: null,
      oLevelResult: null,
      passportPhotograph: null,
      localGovernmentCertificate: null,
      otherCredentials: null,
    },
  });

  const steps = [
    "Registration",
    "Program Selection",
    "Personal Information",
    "Education History",
    "Upload Documents",
  ];

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderContent = () => {
    // Registration flow
    switch (currentStep) {
      case 0:
        return (
          <RegistrationStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onLogin={() => setMode("login")}
          />
        );
      case 1:
        return (
          <ProgramSelectionStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 2:
        return (
          <PersonalInfoStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <EducationHistoryStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <DocumentUploadStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <FormSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <main className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto px-4 py-8">
          {mode === "register" && (
            <ProgressIndicator steps={steps} currentStep={currentStep} />
          )}
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default AuthForm;
