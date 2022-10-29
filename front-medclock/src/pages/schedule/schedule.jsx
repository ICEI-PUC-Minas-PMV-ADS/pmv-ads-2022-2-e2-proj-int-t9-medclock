import { Box, Grid } from "@mui/material";

import ScheduleList from "./schedule-list";
import ScheduleRegister from "./schedule-register";

const Schedule = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <ScheduleRegister />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <ScheduleList />
      </Grid>
    </Grid>
  );
};

export default Schedule;
