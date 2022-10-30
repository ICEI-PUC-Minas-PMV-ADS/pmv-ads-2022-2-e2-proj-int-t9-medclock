import { Box, Grid } from "@mui/material";

import DoctorsList from "./doctors-list";
import DoctorsRegister from "./doctors-register";

const Doctors = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <DoctorsRegister />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <DoctorsList />
      </Grid>
    </Grid>
  );
};

export default Doctors;
