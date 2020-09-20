import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function RoutePrivate({ component: Component, ...props }) {
  const products = useSelector((state) => state.productos.productos);
  return (
    <Route
      {...props}
      render={(props) =>
        products.length === 0 || products === null ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
