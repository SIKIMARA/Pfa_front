import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
const Authenticated = ({ children }) => {
    const history = useNavigate();
    const role = useSelector(state => state.role);
    console.log("role is " + role.role);
  // Check for the presence of a valid token in local storage
  useEffect(() => {
    if (role.role === "guest") {
      // If the token is not present, redirect the user to the login page
        history("/login");
    }
  }, [history]);

  return <>{children}</>;
};

export default Authenticated;