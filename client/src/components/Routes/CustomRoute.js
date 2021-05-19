import Auth from "components/Auth/Auth";
import React from "react";
import { Redirect, Route } from "react-router";

const CustomRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? (
          <Component {...props} />
        ) : (
          <>
            <Auth />
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export default CustomRoute;
