import React from 'react';
import { Box, Heading, Grid } from 'grommet';

export default ({ icon, text }) => (
  <Grid align="start" justify="center">
    <Box round="full" background="light-2" align="center" justify="center" style={{ width: "92px", height: "92px" }}>
      {icon}
    </Box>
    <Heading level={5} margin={{ horizontal: "none", vertical: "medium" }} textAlign="center" style={{ fontSize: "17px" }}>{text}</Heading>
  </Grid>
);