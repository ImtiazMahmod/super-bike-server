import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import SingleOrder from "./SingleOrder/SingleOrder";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const { user } = useAuth();
  //load specific user orders
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myOrders?email=${user?.email}`)
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [myOrders]);
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
        My Orders
      </Typography>
      <Container>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {myOrders?.map((order) => (
            <Grid
              sx={{ alignItems: "center" }}
              key={order._id}
              item
              xs={4}
              sm={4}
              md={4}
            >
              <SingleOrder order={order} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyOrders;
