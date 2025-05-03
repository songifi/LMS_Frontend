import React, { useState } from 'react';
import FormInput from '../../UI/FormInput';
import FormSelect from '../../UI/FormSelect';
import FormDatePicker from '../../UI/FormDatePicker';
import ContinueButton from '../../UI/ContinueButton';
import BackButton from '../../UI/BackButton';

interface PersonalInfoStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}) => {
  const [errors, setErrors] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    stateOfOrigin: '',
    lgaOfOrigin: '',
    contactAddress: ''
  });

  const genders = ['Male', 'Female', 'Other'];
  const nationalities = ['Nigerian', 'Ghanaian', 'South African', 'Kenyan', 'Other'];
  const states = ['Lagos', 'Abuja', 'Kano', 'Rivers', 'Oyo'];
  const lgas = ['Alimosho', 'Apapa', 'Eti-Osa', 'Ikeja', 'Ikorodu'];

  const handleChange = (name: string, value: string) => {
    updateFormData({ [name]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      valid = false;
    } else {
      newErrors.fullName = '';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
      valid = false;
    } else {
      newErrors.dateOfBirth = '';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    } else {
      newErrors.gender = '';
    }

    if (!formData.nationality) {
      newErrors.nationality = 'Nationality is required';
      valid = false;
    } else {
      newErrors.nationality = '';
    }

    if (!formData.stateOfOrigin) {
      newErrors.stateOfOrigin = 'State of origin is required';
      valid = false;
    } else {
      newErrors.stateOfOrigin = '';
    }

    if (!formData.lgaOfOrigin) {
      newErrors.lgaOfOrigin = 'LGA of origin is required';
      valid = false;
    } else {
      newErrors.lgaOfOrigin = '';
    }

    if (!formData.contactAddress.trim()) {
      newErrors.contactAddress = 'Contact address is required';
      valid = false;
    } else {
      newErrors.contactAddress = '';
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Rabilu Mustapha"
          error={errors.fullName}
          required
        />

        <FormDatePicker
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(value) => handleChange('dateOfBirth', value)}
          error={errors.dateOfBirth}
          required
        />

        <FormSelect
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={(value) => handleChange('gender', value)}
          options={genders}
          error={errors.gender}
          required
        />

        <FormSelect
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={(value) => handleChange('nationality', value)}
          options={nationalities}
          error={errors.nationality}
          required
        />

        <FormSelect
          label="State of Origin"
          name="stateOfOrigin"
          value={formData.stateOfOrigin}
          onChange={(value) => handleChange('stateOfOrigin', value)}
          options={states}
          error={errors.stateOfOrigin}
          required
        />

        <FormSelect
          label="LGA of Origin"
          name="lgaOfOrigin"
          value={formData.lgaOfOrigin}
          onChange={(value) => handleChange('lgaOfOrigin', value)}
          options={lgas}
          error={errors.lgaOfOrigin}
          required
        />

        <FormInput
          label="Contact Address"
          name="contactAddress"
          type="text"
          value={formData.contactAddress}
          onChange={handleInputChange}
          placeholder="NO. damaturu rd, Isa kaita avenue"
          error={errors.contactAddress}
          required
        />

        <ContinueButton />
      </form>
    </div>
  );
};

export default PersonalInfoStep;