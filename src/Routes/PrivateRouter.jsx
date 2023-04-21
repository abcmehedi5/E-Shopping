import React, { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { user, spinner } = useContext(AuthContext);
  const location = useLocation();
  console.log("loacation", location);
  if (spinner) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
    </div>
  );
};

export default PrivateRouter;
