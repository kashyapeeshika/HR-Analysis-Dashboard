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

// Styled Paper component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // Ensures uniform height
}));

const drawerWidth = 240;

export default function Graphs() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        marginLeft: `${drawerWidth}px`, // Adjust for sidebar
      }}
    >
      {/* Page Header */}
      <Box sx={{ width: "100%", textAlign: "center", marginBottom: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            color: "#508CA4",
            fontWeight: "bold",
          }}
        >
          Dashboard Graphs Overview
        </Typography>
      </Box>

      {/* Grid for Graphs */}
      <Grid container spacing={3}>
        {[
          AgeGroupDistribution,
          AttritionByGender,
          AverageSalaryByDepartment,
          AverageWorkingYearsByEducationField,
          BusinessTravelAnalysis,
          DistanceFromHomeVsAttrition,
          EducationLevelVsAverageYearsAtCompany,
          GenderRatio,
          SatisfactionLevelsComparison,
        ].map((Component, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item>
              <Component />
            </Item>
          </Grid>
        ))}

        {/* Last Two Graphs (Full Width) */}
        <Grid item xs={12}>
          <Item>
            <OpenPosition />
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item>
            <TrainingHours />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
