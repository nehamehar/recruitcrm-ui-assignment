import type { Candidate } from '@/types'

const mockCandidateData: Candidate = {
  id: 231,
  name: "William Sample",
  email: "williamsample@email.com",
  phone: "+91 9001231234",
  currentOrganization: "World Bank Group",
  summary: "Senior Product Manager",
  skills: ["HTML", "CSS", "Javascript"],
  currentEmploymentStatus: "Employed",
  availableFrom: "Jul, 14, 2023",
  dateOfBirth: "15 June 1993",
  currentSalary: "$6000",
  relevantExperience: "7 Years",
  noticePeriod: "90 Days",
  salaryExpectation: "$9000",
  fullAddress: "9400 Ashton Rd, Philadelphia...",
  status: "Submitted to Client",
  resume: "Resume",
  salaryType: "Annual",
  totalExperience: "5 Years",
  languageSkills: "English (Elementary proficiency)"
};

export const fetchCandidate = (): Promise<Candidate> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCandidateData), 500);
  });
};


