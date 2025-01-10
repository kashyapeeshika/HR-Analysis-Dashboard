import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";

// Sample data for 1,480 employees
const employeeData = Array.from({ length: 1480 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: ["Engineering", "Data Science", "Marketing", "Sales", "HR", "R&D"][i % 6],
  positionLevel: ["Junior", "Mid-level", "Senior"][i % 3],
  avgTrainingHours: [40, 35, 30][i % 3],
  minTrainingHours: [30, 25, 20][i % 3],
  maxTrainingHours: [50, 45, 40][i % 3],
  trainingCompleted: Math.floor(Math.random() * 40) + 10, // Random training completed
}));

const ITEMS_PER_PAGE = 11; // Display fewer rows per page to avoid scrolling

const TrainingHours = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current slice of employees to show
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEmployees = employeeData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Calculate total pages
  const totalPages = Math.ceil(employeeData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <Paper elevation={3} sx={{ padding: "20px", width: "100%" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px", textAlign: "center", fontWeight: "bold" }}>
        Training Hours Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Position Level</TableCell>
              <TableCell>Avg. Training Hours (Year)</TableCell>
              <TableCell>Min Training Hours</TableCell>
              <TableCell>Max Training Hours</TableCell>
              <TableCell>Training Completed</TableCell>
              <TableCell>Training Left</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentEmployees.map((employee) => (
              <TableRow key={employee.id} hover>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.positionLevel}</TableCell>
                <TableCell>{employee.avgTrainingHours}</TableCell>
                <TableCell>{employee.minTrainingHours}</TableCell>
                <TableCell>{employee.maxTrainingHours}</TableCell>
                <TableCell>{employee.trainingCompleted}</TableCell>
                <TableCell>{employee.maxTrainingHours - employee.trainingCompleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Typography>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default TrainingHours;
