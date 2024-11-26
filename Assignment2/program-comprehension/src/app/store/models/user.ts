export type User = {
  name: string;
  surname: string;
  ageRange: string;
  professionalBackground: string;
  codingFrequency: string;
  programmingLanguages: string[];
};

const professionalSectors = [
  'Education',
  'Healthcare',
  'Technology',
  'Finance',
  'Government',
  'Arts and Entertainment',
  'Science and Research',
  'Other',
];

const programmingLanguagesList = [
  'JavaScript',
  'Python',
  'Java',
  'C, C++, C#',
  'R',
  'PHP',
  'HTML/CSS (that are not programming languages, but anyway...)',
  'Other',
];

const codingFrequencyOptions = ['Never', 'Rarely', 'Often', 'Daily'];

const ageRanges = [
  'Under 18',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65 or older',
];

export {
  ageRanges,
  codingFrequencyOptions,
  professionalSectors,
  programmingLanguagesList,
};

export const testUser: User = {
  name: 'John',
  surname: 'Doe',
  ageRange: '18-24',
  professionalBackground: 'Technology',
  codingFrequency: 'Daily',
  programmingLanguages: ['JavaScript', 'Python'],
};
