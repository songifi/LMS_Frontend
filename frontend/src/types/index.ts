export interface FormData {
  // Registration step
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  
  // Program selection step
  degreeType: string;
  faculty: string;
  department: string;
  courseOfStudy: string;
  
  // Personal information step
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  stateOfOrigin: string;
  lgaOfOrigin: string;
  contactAddress: string;
  
  // Education history step
  previousInstitution: string;
  qualificationObtained: string;
  yearOfGraduation: string;
  
  // Document uploads
  documents: {
    birthCertificate: File | null;
    oLevelResult: File | null;
    passportPhotograph: File | null;
    localGovernmentCertificate: File | null;
    otherCredentials: File | null;
  };
}