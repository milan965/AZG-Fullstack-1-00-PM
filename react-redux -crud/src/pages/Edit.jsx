import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ADD_USER, EDIT_USER, UPDATE_USER } from "../redux/action/crudAction";

const Edit = () => {
    const {id} = useParams()
      const dispatch = useDispatch();



    const [ formdata, setFormdata ] = useState({
        name: "",
        age: ""
    });


    

    const single = useSelector(state => state.crud.single);

     useEffect(()=>{
        dispatch(EDIT_USER(id))
        setFormdata({
            ...formdata,
            name : single?.name || "",
            age : single?.age || ""
        })
    },[id,dispatch,single])

    
    const navigate = useNavigate();

  

  
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
            id : id,
            ...formdata
        }

        dispatch(UPDATE_USER(newRecord))
        alert("Update")
        setTimeout(()=>{
            navigate('/');
        },2000)
        
        
  }


 



  return (
    <div align="center">
      <h1>Edit User</h1>
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

export default Edit;
