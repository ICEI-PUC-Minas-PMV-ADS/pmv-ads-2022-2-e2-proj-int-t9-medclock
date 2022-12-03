import { Avatar, Box, Grid, Typography } from "@mui/material";

import SignIn from "./sing-in";
import SignUp from "./sing-up";

import { AccessAlarmSharp } from "@mui/icons-material";

const InitialPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={8}
      gap={10}
    >
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <AccessAlarmSharp />
        </Avatar>
        <Typography variant="h3" color="primary">
          Medclock
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={5} mx={30}>
          <Grid item xs={6}>
            <SignIn />
          </Grid>

          <Grid item xs={6}>
            <SignUp />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InitialPage;
