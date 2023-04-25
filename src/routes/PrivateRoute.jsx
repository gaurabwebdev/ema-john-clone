import React, { useContext } from "react";
import { userContext } from "../Components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="radial-progress text-primary mt-12"
          style={{ "--value": 70 }}
        >
          70%
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
