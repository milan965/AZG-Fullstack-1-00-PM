import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let userlogin = JSON.parse(localStorage.getItem('userlogin'))
    
    
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userlogin') 
        alert("User Logout");
        navigate('/');
    }

  return (
    <div align="center">
        <h1>Welcome to Dashboard Page</h1>
        <p>Name :- {userlogin?.name}</p>
        <p>Email :- {userlogin?.email}</p>
        <p>Password :- {userlogin?.password}</p>


        <button onClick={ ()=> handleLogout()}>Logout</button>
    </div>
  )
}

export default Dashboard
