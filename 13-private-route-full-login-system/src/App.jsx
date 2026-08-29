import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
       <>
            <Routes>

                {/* Public route */}
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>


                {/* Protected / Private Route */}
                <Route element={<ProtectedRoute/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>

            </Routes>
       </>
  );
}

export default App;