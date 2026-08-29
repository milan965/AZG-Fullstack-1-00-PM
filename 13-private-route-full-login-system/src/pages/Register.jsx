import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [users,setUsers] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    )

    const [formInput,setFormInput] = useState({
        name : '',
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
        
        let newUser = {
            userid : Date.now(),
            name : formInput.name,
            email : formInput.email,
            password : formInput.password
        }

        let alluser = [...users,newUser];
        localStorage.setItem('users',JSON.stringify(alluser));
        alert("user register")
        navigate('/login');
    }

  return (
    <div align="center">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="email">Name :- </label>
                <input type="text" name='name' onChange={handleChange} value={formInput.name} placeholder='Enter name'/>
            </p>
            <p>
                <label htmlFor="email">Email :- </label>
                <input type="text" name='email' onChange={handleChange} value={formInput.email} placeholder='Enter email'/>
            </p>
            <p>
                <label htmlFor="password">Password :- </label>
                <input type="text" name='password' onChange={handleChange} value={formInput.password} placeholder='Enter password'/>
            </p>
            <p>
                <button type='submit'>Submit</button>
            </p>
        </form>
    </div>
  )
}

export default Register
