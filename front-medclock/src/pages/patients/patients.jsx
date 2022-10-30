import { Box, Grid } from "@mui/material";

import PatientsList from "./patients-list";
import PatientsRegister from "./patients-register";

const Patients = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <PatientsRegister />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PatientsList />
      </Grid>
    </Grid>
  );
};

export default Patients;
