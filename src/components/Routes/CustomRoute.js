import Auth from "components/Auth/Auth";
import React from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";

const CustomRoute = ({ component: Component, auth, ...rest }) => {
  console.log("helo");
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

CustomRoute.propTypes = {
  component: PropTypes.any,
  auth: PropTypes.any,
};

export default CustomRoute;
