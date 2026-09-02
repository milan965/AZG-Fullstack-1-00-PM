import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
     const [formdata,setFormData] = useState({
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
            
            let checkUser = users.find((user)=>{
                return user.email === formdata.email && user.password === formdata.password
            })

            if(checkUser){
                localStorage.setItem('userlogin',JSON.stringify(checkUser));
                alert("User Login");
                navigate('/admin/dash')
                
            }else{
                alert("Something Wrong");
            }

            setFormData({
                email : '',
                password: ''
            })
            
        }

        useEffect(()=>{
            let userlogin = localStorage.getItem('userlogin');
            if(userlogin){
                navigate('/admin/dash')
            }
        })

  return (
    <div align="center">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
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
        <Link to={`/register`}>Create a new account</Link>
    </div>
  )
}

export default Login
    