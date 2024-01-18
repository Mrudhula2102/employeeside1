// GrievanceForm.js

import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const GrievenceForm = ({ onSubmit }) => {
  const [grievanceText, setGrievanceText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (grievanceText.trim() !== '') {
      onSubmit({ text: grievanceText, date: new Date() });
      setGrievanceText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Grievance:
        <TextField
          value={grievanceText}
          onChange={(e) => setGrievanceText(e.target.value)}
        />
      </label><br/><br/>
      <Button type="submit" variant='contained'>Submit</Button>
    </form>
  );
};

export default GrievenceForm;
