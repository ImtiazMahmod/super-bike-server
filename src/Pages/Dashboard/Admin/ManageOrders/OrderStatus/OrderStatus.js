import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

export default function OrderStatus({ id, status }) {
  const [newStatus, setNewStatus] = useState(status);
  const handleChange = (event) => {
    const changeStatus = event?.target?.value;

    ///update status
    axios
      .put(
        `https://nameless-fortress-10028.herokuapp.com/orders?id=${id}&status=${changeStatus}`
      )
      .then((res) => {
        setNewStatus(changeStatus);
      });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={newStatus} onChange={handleChange} displayEmpty>
          <MenuItem sx={{ color: "tomato" }} value="Pending">
            <em>Pending</em>
          </MenuItem>
          <MenuItem sx={{ color: "green" }} value="Shipped">
            Approved
          </MenuItem>
          <MenuItem sx={{ color: "red" }} value="Rejected">
            Rejected
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
