import React, { useContext } from "react";
import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";
import AuthContext from "../context/auth";

export default function Routers() {
    const {user} = useContext(AuthContext);
  return (
    user == null ? <AppRoutes/> : <AuthRoutes/>
  );
}
