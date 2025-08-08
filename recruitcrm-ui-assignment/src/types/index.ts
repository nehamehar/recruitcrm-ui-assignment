export interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  owner: string;
  dateAdded: string;
  currentOrganization: string;
  skills: string[];
  currentSalary: string;
  noticePeriod: string;
  fullAddress: string;
  totalExperience: string;
  summary: string;
  currentEmploymentStatus: string;
  salaryExpectation: string;
  salaryType: string;
  language: string;
}