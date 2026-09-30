import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { DELETE_USER, EDIT_USER } from '../redux/action/crudAction';

const ViewUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let users = useSelector(state => state.crud.users);
  
  return (
    <div align="center">
        <h1>View Users</h1>

        <table align="center" border={1} width={300}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                  users.map((val)=>{
                      return (
                        <tr key={val.id}>
                          <td>{val.id}</td>
                          <td>{val.name}</td>
                          <td>{val.age}</td>
                          <td>
                            <button onClick={ () => dispatch(DELETE_USER(val.id)) }>Delete</button>
                              ||
                            <button onClick={ () => navigate(`/edit/${val.id}`) }>Edit</button>
                          </td>
                        </tr>
                      )
                  })
              }

            </tbody>
        </table>
           <Link to={`/add`}>Add User</Link>

    </div>
  )
}

export default ViewUser
