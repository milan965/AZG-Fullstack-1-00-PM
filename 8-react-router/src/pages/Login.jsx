import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard')
    }

  return (
    <div>
       

        <button onClick={ () => handleLogin() }>Login</button>

    </div>
  )
}

export default Login
