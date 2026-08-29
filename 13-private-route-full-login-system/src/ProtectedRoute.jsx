import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

  // If the user is not logged in, redirect them to the login page

  let isLoggedIn = JSON.parse(localStorage.getItem('loginUser'));

  if (!isLoggedIn) {
    alert("Please fisrt login")
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes access
  return <Outlet />;
};

export default ProtectedRoute;
