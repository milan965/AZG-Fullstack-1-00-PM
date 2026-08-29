import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem('loginUser');
     alert("User Logout")
     navigate('/login')

  }

  return (
    <div>
        <h1>Welcome to Dashboard Page</h1>

        <button onClick={ () => handleLogout() }>Logout</button>
    </div>
  )
}

export default Dashboard
