import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_USER } from "../redux/action/crudAction";

const Add = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [ formdata, setFormdata ] = useState({
    name: "",
    age: ""
  });

  const handleChange = (e) => {
        const {name,value} = e.target;

        setFormdata({
            ...formdata,
            [name] : value
        })
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        let newRecord = {
            id : Date.now(),
            ...formdata
        }

        dispatch(ADD_USER(newRecord))
        alert("User Add")
        setTimeout(()=>{
            navigate('/');
        },2000)
        
        
  }


  return (
    <div align="center">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name :- </label>
          <input
            type="text"
            name="name"
            onChange={handleChange} value={formdata.name}
            placeholder="Enter name"
          />
        </p>
        <p>
          <label htmlFor="age">Age :- </label>
          <input
            type="text"
            name="age"
            onChange={handleChange} value={formdata.age}
            placeholder="Enter age"
          />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
      <Link to={`/`}>View User</Link>
    </div>
  );
};

export default Add;
