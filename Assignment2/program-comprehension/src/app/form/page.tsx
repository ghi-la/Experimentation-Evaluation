'use client';

import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { openNotification, setUser } from '../store/actions';

const FormPage = () => {
  const [codingFrequency, setCodingFrequency] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
    []
  );
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [professionalBackground, setProfessionalBackground] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !age || !professionalBackground || !codingFrequency) {
      dispatch(
        openNotification({
          message: 'Seems like you forgot to fill in some fields...',
          severity: 'error',
        })
      );
    } else {
      dispatch(
        setUser({
          username,
          age,
          professionalBackground,
          codingFrequency,
          programmingLanguages,
        })
      );

      Cookies.set('user', username, { expires: 0.5 / 24 }); // 0.5 hours = 30 minutes
      router.push('/survey');
    }
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
    'C++',
    'C#',
    'Ruby',
    'PHP',
    'Swift',
    'Go',
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

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Participant Information
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Name and Surname */}
        <TextField
          label="Name and Surname"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Age (Year Range) */}
        <Autocomplete
          options={ageRanges}
          renderInput={(params) => <TextField {...params} label="Age Range" />}
          sx={{ mb: 3 }}
          value={age}
          onChange={(e, newValue) => setAge(newValue || '')}
        />

        {/* Professional Background */}
        <Autocomplete
          options={professionalSectors}
          renderInput={(params) => (
            <TextField {...params} label="Professional Background" />
          )}
          sx={{ mb: 3 }}
          value={professionalBackground}
          onChange={(e, newValue) => setProfessionalBackground(newValue || '')}
        />

        {/* How Often Reads or Writes Code */}
        <Autocomplete
          options={codingFrequencyOptions}
          renderInput={(params) => (
            <TextField {...params} label="How often do you write code?" />
          )}
          sx={{ mb: 3 }}
          value={codingFrequency}
          onChange={(e, newValue) => setCodingFrequency(newValue || '')}
        />

        {/* Programming/Scripting Languages */}
        {codingFrequency !== 'Never' && (
          <Autocomplete
            multiple
            options={programmingLanguagesList}
            renderInput={(params) => (
              <TextField {...params} label="Known Programming Languages" />
            )}
            value={programmingLanguages}
            onChange={(e, newValue) => setProgrammingLanguages(newValue || [])}
            sx={{ mb: 3 }}
          />
        )}

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </PageContainer>
  );
};

export default FormPage;
