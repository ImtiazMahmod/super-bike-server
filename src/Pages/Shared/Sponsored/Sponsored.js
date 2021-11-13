import { Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const Sponsored = () => {
  const useStyles = makeStyles({
    root: {
      filter: " grayscale(100%)",
      opacity: 0.5,
      transition: "all ease-in .2s",
      "&:hover": {
        filter: "none",
        opacity: 1,
        transform: "translateY(-10px)",
      },
    },
  });
  const { root } = useStyles();
  return (
    <Box sx={{ py: 8, mt: 8, bgcolor: grey[100] }}>
      <Container>
        <Grid
          container
          sx={{ justifyContent: "center" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid className={root} item xs={4} sm={4} md={4}>
            <img src="https://i.ibb.co/YPyv1Jy/h2-clients-img-1-h.png" alt="" />
          </Grid>
          <Grid className={root} item xs={4} sm={4} md={4}>
            <img src="https://i.ibb.co/FqshQhP/h2-clients-img-3-h.png" alt="" />
          </Grid>

          <Grid className={root} item xs={4} sm={4} md={4}>
            <img src="https://i.ibb.co/DLQ8X20/h2-clients-img-5-h.png" alt="" />
          </Grid>
          <Grid className={root} item xs={4} sm={4} md={4}>
            <img
              src=" https://i.ibb.co/g4q6jhG/h2-clients-img-4-h.png"
              alt=""
            />
          </Grid>
          <Grid className={root} item xs={4} sm={4} md={4}>
            <img src="https://i.ibb.co/wdNQRgq/h2-clients-img-2-h.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponsored;
