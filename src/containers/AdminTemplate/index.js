import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./_components/Navbar";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  // C1: const { exact, path, Component } = props;

  return (
    // C1:
    // <LayoutAdmin>
    //     <Route exact={exact} path={path} component={Component}></Route>
    // </LayoutAdmin>

    // C2: sử dụng render props
    <Route
      {...props}
      render={(propsRoute) => {
        // Check user Login or not ?
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        // Redirect to /auth (login)
        return <Redirect to="/auth" />;
      }}
    />
  );
}
