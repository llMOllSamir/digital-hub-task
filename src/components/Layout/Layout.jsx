import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";

export default function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
}
