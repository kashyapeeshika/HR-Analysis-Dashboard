import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Import Graph Components
import AgeGroupDistribution from "../Graphs/AgeGroupDistribution";
import AttritionByGender from "../Graphs/AttritionByGender";
import AverageSalaryByDepartment from "../Graphs/AverageSalaryByDepartment";
import AverageWorkingYearsByEducationField from "../Graphs/AverageWorkingYearsByEducationField";
import BusinessTravelAnalysis from "../Graphs/BusinessTravelAnalysis";
import DistanceFromHomeVsAttrition from "../Graphs/DistanceFromHomeVsAttrition";
import EducationLevelVsAverageYearsAtCompany from "../Graphs/EducationLevelVsAverageYearsAtCompany";
import GenderRatio from "../Graphs/GenderRatio";
import SatisfactionLevelsComparison from "../Graphs/SatisfactionLevelsComparison";
import OpenPosition from "../Graphs/OpenPosition";
import TrainingHours from "../Graphs/TrainingHours";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

export default function Graphs() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      {/* Page Header */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", marginBottom: 3, color: "#508CA4" }}
      >
        Dashboard Graphs Overview
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {[AgeGroupDistribution, AttritionByGender, AverageSalaryByDepartment, AverageWorkingYearsByEducationField, BusinessTravelAnalysis, DistanceFromHomeVsAttrition, EducationLevelVsAverageYearsAtCompany, GenderRatio, SatisfactionLevelsComparison].map((Component, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Item>
              <Component />
            </Item>
          </Grid>
        ))}

        {/* Open Positions and Training Hours */}
        <Grid item xs={12}>
          <Item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <OpenPosition />
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TrainingHours />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
