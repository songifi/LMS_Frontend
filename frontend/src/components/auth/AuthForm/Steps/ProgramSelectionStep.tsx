import React, { useState } from "react";
import FormSelect from "../../UI/FormSelect";
import ContinueButton from "../../UI/ContinueButton";
import BackButton from "../../UI/BackButton";

interface ProgramSelectionStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const ProgramSelectionStep: React.FC<ProgramSelectionStepProps> = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}) => {
  const [errors, setErrors] = useState({
    degreeType: "",
    faculty: "",
    department: "",
    courseOfStudy: "",
  });

  const degreeTypes = [
    "Undergraduate",
    "Postgraduate",
    "Diploma",
    "Certificate",
  ];
  const faculties = [
    "Faculty of Administration",
    "Faculty of Arts",
    "Faculty of Science",
    "Faculty of Engineering",
  ];

  const departmentsByFaculty: Record<string, string[]> = {
    "Faculty of Administration": [
      "Accounting",
      "Business Administration",
      "Public Administration",
    ],
    "Faculty of Arts": ["English", "History", "Philosophy"],
    "Faculty of Science": ["Computer Science", "Mathematics", "Physics"],
    "Faculty of Engineering": [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],
  };

  const coursesByDepartment: Record<string, string[]> = {
    Accounting: [
      "Banking and Finance",
      "Financial Accounting",
      "Management Accounting",
    ],
    "Computer Science": [
      "Software Engineering",
      "Data Science",
      "Cybersecurity",
    ],
    "Electrical Engineering": [
      "Power Systems",
      "Telecommunications",
      "Control Systems",
    ],
    // Add more courses as needed
  };

  const handleChange = (name: string, value: string) => {
    updateFormData({ [name]: value });

    // Reset dependent fields when parent field changes
    if (name === "faculty") {
      updateFormData({ department: "", courseOfStudy: "" });
    } else if (name === "department") {
      updateFormData({ courseOfStudy: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.degreeType) {
      newErrors.degreeType = "Please select a degree type";
      valid = false;
    } else {
      newErrors.degreeType = "";
    }

    if (!formData.faculty) {
      newErrors.faculty = "Please select a faculty";
      valid = false;
    } else {
      newErrors.faculty = "";
    }

    if (!formData.department) {
      newErrors.department = "Please select a department";
      valid = false;
    } else {
      newErrors.department = "";
    }

    if (!formData.courseOfStudy) {
      newErrors.courseOfStudy = "Please select a course of study";
      valid = false;
    } else {
      newErrors.courseOfStudy = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  // Get available departments based on selected faculty
  const availableDepartments = formData.faculty
    ? departmentsByFaculty[formData.faculty] || []
    : [];

  // Get available courses based on selected department
  const availableCourses = formData.department
    ? coursesByDepartment[formData.department] || []
    : [];

  return (
    <div className="w-full animate-fadeIn">
      <BackButton onClick={onBack} />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Program Selection
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormSelect
          label="Select Degree Type"
          name="degreeType"
          value={formData.degreeType}
          onChange={(value) => handleChange("degreeType", value)}
          options={degreeTypes}
          error={errors.degreeType}
          required
        />

        <FormSelect
          label="Faculty"
          name="faculty"
          value={formData.faculty}
          onChange={(value) => handleChange("faculty", value)}
          options={faculties}
          error={errors.faculty}
          required
        />

        <FormSelect
          label="Department"
          name="department"
          value={formData.department}
          onChange={(value) => handleChange("department", value)}
          options={availableDepartments}
          disabled={!formData.faculty}
          error={errors.department}
          required
        />

        <FormSelect
          label="Course of Study"
          name="courseOfStudy"
          value={formData.courseOfStudy}
          onChange={(value) => handleChange("courseOfStudy", value)}
          options={availableCourses}
          disabled={!formData.department}
          error={errors.courseOfStudy}
          required
        />

        <ContinueButton />
      </form>
    </div>
  );
};

export default ProgramSelectionStep;
