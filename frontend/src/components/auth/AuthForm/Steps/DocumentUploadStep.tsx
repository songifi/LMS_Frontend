import React, { useState } from 'react';
import FormFileUpload from '../../UI/FormFileUpload';
import ContinueButton from '../../UI/ContinueButton';
import BackButton from '../../UI/BackButton';

interface DocumentUploadStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const DocumentUploadStep: React.FC<DocumentUploadStepProps> = ({ 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}) => {
  const [errors, setErrors] = useState({
    birthCertificate: '',
    oLevelResult: '',
    passportPhotograph: '',
    localGovernmentCertificate: '',
    otherCredentials: ''
  });

  const handleFileChange = (name: string, file: File | null) => {
    updateFormData({
      documents: {
        ...formData.documents,
        [name]: file
      }
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Required documents
    if (!formData.documents.birthCertificate) {
      newErrors.birthCertificate = 'Birth certificate is required';
      valid = false;
    } else {
      newErrors.birthCertificate = '';
    }

    if (!formData.documents.oLevelResult) {
      newErrors.oLevelResult = 'O\'Level result is required';
      valid = false;
    } else {
      newErrors.oLevelResult = '';
    }

    if (!formData.documents.passportPhotograph) {
      newErrors.passportPhotograph = 'Passport photograph is required';
      valid = false;
    } else {
      newErrors.passportPhotograph = '';
    }

    if (!formData.documents.localGovernmentCertificate) {
      newErrors.localGovernmentCertificate = 'Local government certificate is required';
      valid = false;
    } else {
      newErrors.localGovernmentCertificate = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission would go here in a real app
      console.log('Form submitted successfully', formData);
      alert('Registration completed successfully!');
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <BackButton onClick={onBack} />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormFileUpload
          label="Birth Certificate"
          name="birthCertificate"
          onChange={(file) => handleFileChange('birthCertificate', file)}
          error={errors.birthCertificate}
          required
        />

        <FormFileUpload
          label="O'Level Result (WAEC, NECO etc)"
          name="oLevelResult"
          onChange={(file) => handleFileChange('oLevelResult', file)}
          error={errors.oLevelResult}
          required
        />

        <FormFileUpload
          label="Passport Photograph"
          name="passportPhotograph"
          onChange={(file) => handleFileChange('passportPhotograph', file)}
          error={errors.passportPhotograph}
          required
        />

        <FormFileUpload
          label="Local Government Certificate"
          name="localGovernmentCertificate"
          onChange={(file) => handleFileChange('localGovernmentCertificate', file)}
          error={errors.localGovernmentCertificate}
          required
        />

        <FormFileUpload
          label="Other Credentials"
          name="otherCredentials"
          onChange={(file) => handleFileChange('otherCredentials', file)}
          error={errors.otherCredentials}
        />

        <ContinueButton />
      </form>
    </div>
  );
};

export default DocumentUploadStep;