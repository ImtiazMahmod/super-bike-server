import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable/OrderTable";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  ///load all orders
  useEffect(() => {
    axios.get("http://localhost:5000/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, [orders]);
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
