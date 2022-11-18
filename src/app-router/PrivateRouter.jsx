import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRouter;
