import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable/OrderTable";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  ///load all orders
  useEffect(() => {
    axios
      .get("https://nameless-fortress-10028.herokuapp.com/allOrders")
      .then((res) => {
        setOrders(res.data);
      });
  }, [orders]);
  console.log(orders);
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
        Manage All Orders
      </Typography>
      <OrderTable orders={orders} />
    </div>
  );
};

export default ManageOrders;
