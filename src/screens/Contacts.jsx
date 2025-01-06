import React from "react";
import { Box, Typography, Container, Grid, TextField, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Paper for the contact form
const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: "#ffffff",
}));

const Contacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        paddingY: 4,
      }}
    >
      {/* Header Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We'd love to hear from you! Please fill out the form below or reach us directly at our contact details.
        </Typography>
      </Container>

      {/* Contacts Form */}
      <Container maxWidth="sm">
        <FormWrapper>
          <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
            Get in Touch
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              {/* Name Field */}
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>

              {/* Subject Field */}
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              {/* Message Field */}
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ paddingY: 1.5 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormWrapper>
      </Container>

      {/* Contacts Information */}
      <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Reach out to us anytime via:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          📧 Email: support@yourcompany.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ☎️ Phone: +1 (555) 123-4567
        </Typography>
        <Typography variant="body2" color="text.secondary">
          📍 Address: 123 Business Lane, Suite 456, City, State, ZIP
        </Typography>
      </Container>
    </Box>
  );
};

export default Contacts;
