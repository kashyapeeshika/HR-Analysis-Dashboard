import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

// Import all your graph components
import AgeGroupDistribution from "../Graphs/AgeGroupDistribution";
import AttritionByGender from "../Graphs/AttritionByGender";
import AverageSalaryByDepartment from "../Graphs/AverageSalaryByDepartment";
import AverageWorkingYearsByEducationField from "../Graphs/AverageWorkingYearsByEducationField";
import BusinessTravelAnalysis from "../Graphs/BusinessTravelAnalysis";
import DistanceFromHomeVsAttrition from "../Graphs/DistanceFromHomeVsAttrition";
import EducationLevelVsAverageYearsAtCompany from "../Graphs/EducationLevelVsAverageYearsAtCompany"
import GenderRatio from "../Graphs/GenderRatio";
import SatisfactionLevelsComparison from "../Graphs/SatisfactionLevelsComparison";
import OpenPosition from "../Graphs/OpenPosition";
import TrainingHours from "../Graphs/TrainingHours";

const Graphs = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Page Header */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", marginBottom: "20px", color: "#508CA4" }}
      >
        Dashboard Graphs Overview
      </Typography>

      {/* Grid Layout for Graphs */}
      <Grid container spacing={3}>
        {/* Age Group Distribution */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <AgeGroupDistribution />
          </Paper>
        </Grid>

        {/* Attrition By Gender */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <AttritionByGender />
          </Paper>
        </Grid>

        {/* Average Salary By Department */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <AverageSalaryByDepartment />
          </Paper>
        </Grid>

        {/* Average Working Years By Education Field */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <AverageWorkingYearsByEducationField />
          </Paper>
        </Grid>

        {/* Business Travel Analysis */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <BusinessTravelAnalysis />
          </Paper>
        </Grid>

        {/* Distance From Home Vs Attrition */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <DistanceFromHomeVsAttrition />
          </Paper>
        </Grid>

        {/* Education Level Vs Average Years At Company */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <EducationLevelVsAverageYearsAtCompany />
          </Paper>
        </Grid>

        {/* Gender Ratio */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <GenderRatio />
          </Paper>
        </Grid>

        {/* Satisfaction Levels Comparison */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <SatisfactionLevelsComparison />
          </Paper>
        </Grid>

        {/* Open Positions and Training Hours */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: "10px", height: "100%" }}>
            <OpenPosition />
          </Paper>
        </Grid>
      </Grid>

      {/* Training Hours */}
      
    </Box>
  );
};

export default Graphs;
