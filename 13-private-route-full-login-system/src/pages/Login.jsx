import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        let isLoggedIn = JSON.parse(localStorage.getItem('loginUser'));
        if(isLoggedIn){
            navigate('/dashboard');
        }
    })

     
    const [users,setUsers] = useState(
            localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    )

    const [formInput,setFormInput] = useState({
            email : '',
            password : ''
        })

    const handleChange = (e) => {
        const {name,value} = e.target;

        setFormInput({
            ...formInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let userlogin = users.find(val => val.email == formInput.email &&  val.password == formInput.password)

        
        if(!userlogin){
            alert("Email and Password not valid")
            return false;
        }

        localStorage.setItem('loginUser',JSON.stringify(userlogin));
        navigate('/dashboard');
        
        

    }


  return (
    <div align="center">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="email">Email :- </label>
                <input type="text" onChange={handleChange} name='email' value={formInput.email}/>
            </p>
            <p>
                <label htmlFor="password">Password :- </label>
                <input type="text" onChange={handleChange} name='password' value={formInput.password}/>
            </p>
            <p>
                <button type='submit'>Login</button>
            </p>
        </form>
    </div>
  )
}

export default Login
