import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>Welcome to Login Page</h1>
        <Link to={`/dash`}>Dashboard</Link>
    </div>
  )
}

export default Login