// GrievanceList.js

import React from 'react';

const GrievanceList = ({ grievances }) => {
  return (
    <div>
      <h2>Grievance List</h2>
      <ul>
        {grievances.map((grievance, index) => (
          <li key={index}>
            {grievance.text} - {grievance.date.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrievanceList;
