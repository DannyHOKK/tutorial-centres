// PrivateRoute.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userToken, userIdentity, userDetails } = useSelector(
    (state) => state.auth
  );

  return userToken ? <Outlet /> : <Navigate to="/tutorRegister" />;
};

export default PrivateRoute;
