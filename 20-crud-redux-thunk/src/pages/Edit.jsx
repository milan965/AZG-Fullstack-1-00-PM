import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ADD_USER, EDIT_USER, UPDATE_USER } from '../redux/action/crudAction'

const Edit = () => {

    const {id} = useParams()
    
    

    const dispatch = useDispatch()
    const [formdata,setFormData] = useState({
        name : '',
        age : ''
    })
    
   
    let single = useSelector(state => state.crud.single);
    useEffect(()=>{
        dispatch(EDIT_USER(id))
        setFormData({
            ...formdata,
            name : single?.name || "",
            age : single?.age || "",

        })
    },[id,single,dispatch]);

    
    

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let editUser = {
            id : id,
            ...formdata
        }
       dispatch(UPDATE_USER(editUser))
       alert("Record update")
       setFormData({
            name : '',
            age : ''
       })
        
    }

  return (
    <div align="center">
        
    <h1>Edit Users</h1>

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

export default Edit
