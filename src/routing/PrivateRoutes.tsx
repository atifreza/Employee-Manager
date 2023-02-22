import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = ({ component: Component }: any) => {
  const { userLoginDetails } = useSelector((state: any) => state.loginInData);
  return Object.keys(userLoginDetails).length > 0 ? <Outlet /> : <Navigate to="/page_not_found" />
};

export default PrivateRoutes;
