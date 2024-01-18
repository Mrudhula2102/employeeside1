// GrievancesPage.js

import React, { useState } from 'react';
import GrievenceForm from './GrievenceForm';
import GrievanceList from './GrievanceList';

const Grievances = () => {
  const [grievances, setGrievances] = useState([]);

  const handleGrievanceSubmit = (grievance) => {
    setGrievances([...grievances, grievance]);
  };

  return (
    <div align="center">
      <h1>Grievances Page</h1>
      <GrievenceForm onSubmit={handleGrievanceSubmit} />
      <GrievanceList grievances={grievances} />
    </div>
  );
};

export default Grievances;
