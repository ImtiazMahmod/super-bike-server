import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BikeTable from "./BikeTable/BikeTable";

const ManageBikes = () => {
  const [bikes, setBikes] = useState([]);
  ///load all orders
  useEffect(() => {
    axios.get("http://localhost:5000/bikes").then((res) => {
      setBikes(res.data);
    });
  }, [bikes]);
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
        Manage Bikes
      </Typography>
      <BikeTable bikes={bikes} />
    </div>
  );
};

export default ManageBikes;
