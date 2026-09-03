import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserList = () => {

    const navigate = useNavigate();

     const [users,setUsers] = useState(
            localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
     )

     const handleDelete = (id) => {
        let did = users.filter(val => val.id != id);
        localStorage.setItem('users',JSON.stringify(did));
        alert("delete user");
        setUsers(did);
     }

  return (
    <div align="center">
        <h2>User List</h2>
        <table width="500" border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={ () => handleDelete(user.id) }>Delete</button>
                                    <button onClick={ () => navigate(`/edit/${user.id}`) }>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <hr />
        <Link to={`/add`}>Add User</Link>
    </div>
  )
}

export default UserList
