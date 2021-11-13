import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();

  if (!admin) {
    return <Spinner />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
