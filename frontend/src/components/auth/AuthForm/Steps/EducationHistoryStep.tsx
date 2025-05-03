import React, { useState } from 'react';
import FormInput from '../../UI/FormInput';
import FormSelect from '../../UI/FormSelect';
import FormDatePicker from '../../UI/FormDatePicker';
import ContinueButton from '../../UI/ContinueButton';
import BackButton from '../../UI/BackButton';

interface EducationHistoryStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const EducationHistoryStep: React.FC<EducationHistoryStepProps> = ({ 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}) => {
  const [errors, setErrors] = useState({
    previousInstitution: '',
    qualificationObtained: '',
    yearOfGraduation: ''
  });

  const qualifications = ['WAEC', 'NECO', 'IGCSE', 'GCE', 'A-Levels', 'Diploma', 'Degree'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleChange = (name: string, value: string) => {
    updateFormData({ [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.previousInstitution.trim()) {
      newErrors.previousInstitution = 'Previous institution is required';
      valid = false;
    } else {
      newErrors.previousInstitution = '';
    }

    if (!formData.qualificationObtained) {
      newErrors.qualificationObtained = 'Qualification is required';
      valid = false;
    } else {
      newErrors.qualificationObtained = '';
    }

    if (!formData.yearOfGraduation) {
      newErrors.yearOfGraduation = 'Year of graduation is required';
      valid = false;
    } else {
      newErrors.yearOfGraduation = '';
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

  return (
    <div className="w-full animate-fadeIn">
      <BackButton onClick={onBack} />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education History</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Previous Institution Attended"
          name="previousInstitution"
          type="text"
          value={formData.previousInstitution}
          onChange={handleInputChange}
          placeholder="FGGC Malali"
          error={errors.previousInstitution}
          required
        />

        <FormSelect
          label="Qualification Obtained"
          name="qualificationObtained"
          value={formData.qualificationObtained}
          onChange={(value) => handleChange('qualificationObtained', value)}
          options={qualifications}
          error={errors.qualificationObtained}
          required
        />

        <FormDatePicker
          label="Year of Graduation"
          name="yearOfGraduation"
          value={formData.yearOfGraduation}
          onChange={(value) => handleChange('yearOfGraduation', value)}
          yearOnly={true}
          error={errors.yearOfGraduation}
          required
        />

        <ContinueButton />
      </form>
    </div>
  );
};

export default EducationHistoryStep;