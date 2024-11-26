'use client';

import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { openNotification, setUser } from '../store/actions';
import {
  ageRanges,
  codingFrequencyOptions,
  programmingLanguagesList,
  User,
} from '../store/models/user';

const FormPage = () => {
  const [codingFrequency, setCodingFrequency] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
    []
  );
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!age || !codingFrequency) {
      dispatch(
        openNotification({
          message: 'Seems like you forgot to fill in some fields...',
          severity: 'error',
        })
      );
    } else {
      const user: User = {
        name: username.split(' ')[0].trim() || 'Anonymous',
        surname: username.split(' ')[1] || '',
        ageRange: age,
        codingFrequency: codingFrequency,
        programmingLanguages:
          codingFrequency.toLowerCase() === 'never' ? [] : programmingLanguages,
      };
      console.log(user);
      dispatch(setUser(user));

      Cookies.set('user', user.name, { expires: 0.5 / 24 }); // 0.5 hours = 30 minutes
      router.push('/survey');
    }
  };

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Participant Information
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Name and Surname */}
        <TextField
          label="Name and Surname (leave blank if you want to stay anonymous)"
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
            disableCloseOnSelect
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
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          By submitting this form, you agree that we can use your data for this
          experiment (all data will be anonymized).
        </Typography>
      </form>
    </PageContainer>
  );
};

export default FormPage;
