import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContactsIcon from "@mui/icons-material/Contacts";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import RateReviewIcon from "@mui/icons-material/RateReview";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import { makeStyles } from "@mui/styles";
import AddBike from "./Admin/AddBike/AddBike";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import Pay from "./User/Pay/Pay";
import MyOrders from "./User/MyOrders/MyOrders";
import Review from "./User/Review/Review";
import useAuth from "../../Hooks/useAuth";
import ManageOrders from "./Admin/ManageOrders/ManageOrders";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import ManageBikes from "./Admin/ManageBikes/ManageBikes";

const drawerWidth = 240;
///make custom styles
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    color: "black",
  },
});

function Dashboard(props) {
  const { root } = useStyles();
  const { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { logout } = useAuth();
  ///handle logout
  const history = useHistory();
  const handleLogOut = () => {
    logout();
    history.push("/");
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      {/* User control */}
      <List>
        <Link className={root} to={`${url}/pay`}>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Pay</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link className={root} to={`${url}/myOrders`}>
          <ListItem button>
            <ListItemIcon>
              <ContactsIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>My Orders</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link className={root} to={`${url}/review`}>
          <ListItem button>
            <ListItemIcon>
              <RateReviewIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Review</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>

      {/* Admin control */}
      <List>
        <Link className={root} to={`${url}/manageOrders`}>
          <ListItem button>
            <ListItemIcon>
              <AddBoxSharpIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Manage All Orders</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link className={root} to={`${url}/addBike`}>
          <ListItem button>
            <ListItemIcon>
              <AddBoxSharpIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Add a Bike</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link className={root} to={`${url}/makeAdmin`}>
          <ListItem button>
            <ListItemIcon>
              <AddBoxSharpIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Make Admin</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link className={root} to={`${url}/manageBikes`}>
          <ListItem button>
            <ListItemIcon>
              <AddBoxSharpIcon sx={{ color: "tomato" }} />
              <Typography sx={{ mx: 1 }}>Manage Bikes</Typography>
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <Link className={root} to="/">
        <ListItem button>
          <ListItemIcon>
            <HomeSharpIcon sx={{ color: "tomato" }} />
            <Typography sx={{ mx: 1 }}>Home</Typography>
          </ListItemIcon>
        </ListItem>
      </Link>
      <ListItem onClick={handleLogOut} button>
        <ListItemIcon>
          <LogoutSharpIcon sx={{ color: "tomato" }} />
          <Typography sx={{ mx: 1 }}>Logout</Typography>
        </ListItemIcon>
      </ListItem>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          {/* user  */}
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>

          {/* Admin */}
          <Route path={`${path}/manageOrders`}>
            <ManageOrders />
          </Route>
          <Route path={`${path}/addBike`}>
            <AddBike />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manageBikes`}>
            <ManageBikes />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
