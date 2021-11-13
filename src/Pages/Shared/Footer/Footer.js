import { Call, Email } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: grey[900] }}>
      <Container>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={4} sm={4} md={3} item>
            <img width="150" src="https://i.ibb.co/VTKyytz/logo.png" alt="" />
            <Typography
              sx={{ color: grey[500], fontSize: 14, textAlign: "left" }}
            >
              If you are looking for the smoothest way to reach the top speed &
              cruise in front of your competitors, you’re in the right place.
              Welcome to Super Bike.
            </Typography>
          </Grid>
          <Grid xs={4} sm={4} md={3} item textAlign="left">
            <Typography color="white">OUR SERVICES</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Explore
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Motor Bike
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Dynamic Racing
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Ultra ProMex
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid textAlign="center" xs={4} sm={4} md={3} item>
            <Typography textAlign="left" color="white">
              CONTACT
            </Typography>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <LocationOnIcon />{" "}
              <Typography sx={{ mx: 1 }}> Dhaka,Bangladesh</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Call /> <Typography sx={{ mx: 1 }}> +880 188 888 888</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Email />{" "}
              <Typography sx={{ mx: 1 }}> support@superbike.com</Typography>
            </Box>
          </Grid>
          <Grid xs={4} sm={4} md={3} item>
            <Typography textAlign="left" color="white">
              CONNECT
            </Typography>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
                justifyContent: "start",
              }}
            >
              {" "}
              <FacebookIcon sx={{ mx: 1 }} />
              <GoogleIcon sx={{ mx: 1 }} />
              <TwitterIcon sx={{ mx: 1 }} />
              <LinkedInIcon sx={{ mx: 1 }} />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography sx={{ mt: 5 }} color="lightgrey">
            @copyright all right reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
