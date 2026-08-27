import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard',{
           state : {
              name : 'jay',age:21
           }
        })
    }

  return (
    <div>
       

        <button onClick={ () => handleLogin() }>Login</button>

    </div>
  )
}

export default Login
