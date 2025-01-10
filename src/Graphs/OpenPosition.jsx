import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const OpenPosition = () => {
  const positions = [
    { id: 1, department: 'Data Science', position: 'Data Analyst', level: 'Mid-level', salary: '700k', openings: 3, experience: '2-4', location: 'Mumbai' },
    { id: 2, department: 'Marketing', position: 'Marketing Manager', level: 'Senior', salary: '1,200k', openings: 2, experience: '5-7', location: 'Delhi' },
    { id: 3, department: 'Sales', position: 'Sales Executive', level: 'Junior', salary: '500k', openings: 4, experience: '1-3', location: 'Hyderabad' },
    { id: 4, department: 'Human Resources', position: 'HR Specialist', level: 'Entry Level', salary: '600k', openings: 1, experience: '2-3', location: 'Pune' },
    { id: 5, department: 'Engineering', position: 'Product Manager', level: 'Senior', salary: '1,500k', openings: 2, experience: '5-8', location: 'Bengaluru' },
    { id: 6, department: 'Finance', position: 'Business Analyst', level: 'Mid-level', salary: '900k', openings: 3, experience: '3-5', location: 'Chennai' },
    { id: 7, department: 'Research & Development', position: 'Research Scientist', level: 'Senior', salary: '1,000k', openings: 2, experience: '4-6', location: 'Pune' },
  ];

  return (
    <Paper elevation={3} sx={{ padding: '20px', width: '100%' }}>
      <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
        Open Positions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Open Position</TableCell>
              <TableCell>Position Level</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>No. of Openings</TableCell>
              <TableCell>Required Experience (Years)</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((pos) => (
              <TableRow key={pos.id} hover>
                <TableCell>{pos.id}</TableCell>
                <TableCell>{pos.department}</TableCell>
                <TableCell>{pos.position}</TableCell>
                <TableCell>{pos.level}</TableCell>
                <TableCell>{pos.salary}</TableCell>
                <TableCell>{pos.openings}</TableCell>
                <TableCell>{pos.experience}</TableCell>
                <TableCell>{pos.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OpenPosition;
