import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Collection = () => {
  return (
    <Box>
      <Typography color="tomato">DISCOVER YOUR</Typography>
      <Typography fontWeight="bold" variant="h4">
        {" "}
        BIKE RANGE
      </Typography>
      <Container>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Collection;
