import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_USER } from '../redux/action/crudAction'

const Add = () => {
    const dispatch = useDispatch()
    const [formdata,setFormData] = useState({
        name : '',
        age : ''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(ADD_USER(formdata))
       alert("Record add")
       setFormData({
            name : '',
            age : ''
       })
        
    }

  return (
    <div align="center">
        
    <h1>Add Users</h1>

    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="name">Name :- </label>
            <input type="text" name='name' onChange={handleChange} value={formdata.name} placeholder='Enter name'/>
        </p>

        <p>
            <label htmlFor="name">Age :- </label>
            <input type="text" name='age' onChange={handleChange} value={formdata.age} placeholder='Enter age'/>
        </p>

        <p>
            <input type="submit" value="submit"/>
        </p>
    </form>

    <Link to={`/`}>View</Link>

    </div>
  )
}

export default Add
