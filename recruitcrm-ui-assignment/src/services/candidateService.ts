import type { Candidate } from '@/types';

const mockCandidateData: Candidate = {
  id: 231,
  name: 'William Sample',
  email: 'williamsample@email.com',
  phone: '+91 9001231234',
  status: 'Active',
  owner: 'Phyllis Yang',
  dateAdded: 'Jul 14, 2023, 4:04 PM',
  currentOrganization: 'Yodle Bank Group',
  skills: ['ATMS', 'CRM', 'Product Manager', 'Jira'],
  currentSalary: '80,000$',
  noticePeriod: '90 Days',
  fullAddress: '55 street, Philadelphia, PA',
  totalExperience: '1 Years',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  currentEmploymentStatus: 'Employed',
  salaryExpectation: '88000',
  salaryType: 'Annual',
  language: 'English (Elementary)',
};

export const fetchCandidate = (): Promise<Candidate> => {
  console.log('Fetching candidate data...');
  return new Promise((resolve) => {
    // Simulate a 500ms network delay
    setTimeout(() => {
      console.log('Data fetched successfully.');
      resolve(mockCandidateData);
    }, 500);
  });
};

export const updateCandidate = (updatedData: Partial<Candidate>): Promise<void> => {
  console.log('Updating candidate data with:', updatedData);
  return new Promise((resolve) => {
    // In a real app, this would be a PATCH or PUT request
    setTimeout(() => {
      console.log('Data updated successfully on server.');
      Object.assign(mockCandidateData, updatedData);
      resolve();
    }, 300);
  });
};