export type User = {
  name: string;
  surname: string;
  ageRange: string;
  codingFrequency: string;
  programmingLanguages: string[];
};

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

const ageRanges = ['Under 18', '18-24', '25-34', '35-44', '45 or older'];

export { ageRanges, codingFrequencyOptions, programmingLanguagesList };
