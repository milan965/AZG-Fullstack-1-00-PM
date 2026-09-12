import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserList = () => {

    const navigate = useNavigate();

     const [users,setUsers] = useState(
            localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
     )

     const [filter,setFilter] = useState([]);

     const [searchName,setSearchName] = useState("");

     const [sorting,setSorting] = useState("");

     
     

     const filterFunction = () => {
        let filteredNames = [...users];
        if(searchName){
            filteredNames = users.filter((item)=>{
                return item.name.toLowerCase().includes(searchName.toLowerCase())
            })
            setFilter(filteredNames)
        }

        if(sorting){
            if(sorting === "asc"){
                filteredNames.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            }else{
                filteredNames.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });
            }
            setFilter(filteredNames)
        }

        
     }


     //search wise name useeffect working
     useEffect(()=>{
        setFilter(users)
        filterFunction();
     },[searchName,sorting])



     const handleDelete = (id) => {
        let did = users.filter(val => val.id != id);
        localStorage.setItem('users',JSON.stringify(did));
        alert("delete user");
        setUsers(did);
     }

  return (
    <div align="center">
        <h2>User List</h2>
        <input type="text" onChange={ (e) => setSearchName(e.target.value) } value={searchName}placeholder='search name'/>
        <hr />

        <select name='sorting' onChange={ (e) => setSorting(e.target.value) }>
            <option value="">---Select Sort---</option>
            <option value="asc">Asc</option>
            <option value="dsc">Dsc</option>

        </select>
        <hr />

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
                    filter.map((user)=>{
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
