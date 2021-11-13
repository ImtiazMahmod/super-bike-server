import { Container, Grid, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { deepOrange, grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import {
  Call,
  Email,
  Facebook,
  Google,
  LinkedIn,
  Public,
  Twitter,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const SuperBikeInfo = () => {
  const useStyles = makeStyles({
    root: {
      height: 200,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      opacity: 1,
      transition: "all ease-in .5s",
      "&:hover": {
        filter: "grayscale(100%)",
        opacity: 0.8,
        transform: "translateY(-10px)",
      },
    },
  });
  const { root } = useStyles();
  return (
    <div>
      <Container>
        <Box sx={{ my: 8 }}>
          <Grid columns={{ xs: 4, sm: 8, md: 12 }} container>
            <Grid item xs={4} sm={4} md={3}>
              <Paper className={root}>
                {" "}
                <LocationOnIcon
                  sx={{
                    fontSize: 40,
                    my: 1,
                    color: deepOrange[500],
                  }}
                />{" "}
                <Typography color="gray" sx={{ mx: 1 }}>
                  {" "}
                  Dhaka, Bangladesh
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Paper className={root}>
                {" "}
                <Call
                  sx={{
                    fontSize: 40,
                    my: 1,
                    color: deepOrange[500],
                  }}
                />{" "}
                <Typography color="gray" sx={{ mx: 1 }}>
                  {" "}
                  +880 188 888 888
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Paper className={root}>
                {" "}
                <Email
                  sx={{
                    fontSize: 40,
                    my: 1,
                    color: deepOrange[500],
                  }}
                />{" "}
                <Typography color="gray" sx={{ mx: 1 }}>
                  support@superbike.com
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Paper className={root}>
                {" "}
                <Public
                  sx={{
                    fontSize: 40,
                    my: 1,
                    color: deepOrange[500],
                  }}
                />{" "}
                <Box color="gray">
                  <Facebook />
                  <Google />
                  <Twitter />
                  <LinkedIn />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SuperBikeInfo;
