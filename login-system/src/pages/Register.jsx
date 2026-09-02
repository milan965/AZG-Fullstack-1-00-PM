import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [formdata,setFormData] = useState({
        name : '',
        email : '',
        password : ''
    })

    const [users,setUsers] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    )

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        let newUser = {
            userid : Date.now(),
            ...formdata
        }

        let allusers = [...users,newUser];
        localStorage.setItem('users',JSON.stringify(allusers));
        alert("user register")
        navigate('/');
           
    }



  return (
    <div align="center">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <p>
                Name : <input type="text" name='name' onChange={handleChange} value={formdata.name} placeholder='Enter Name' />
            </p>
            <p>
                Email : <input type="text" name='email' onChange={handleChange} value={formdata.email} placeholder='Enter Email' />
            </p>
            <p>
                Password : <input type="text" name='password' onChange={handleChange} value={formdata.password} placeholder='Enter Password' />
            </p>
            <p>
                <input type="submit" />
            </p>
        </form>
        <hr />
        <Link to={`/`}>Login</Link>
    </div>
  )
}

export default Register
    