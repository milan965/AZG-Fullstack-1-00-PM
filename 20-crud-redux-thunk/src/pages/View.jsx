import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { VIEW_USER } from '../redux/action/crudAction';

const View = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(VIEW_USER())
  },[])

  let users = useSelector(state => state.crud.users);
  
  

  return (
    <div align="center">
        <h1>View User</h1>

        <table border={1} width="500">
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
                    users.map((val,i)=>{
                      return (
                          <tr key={i++}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>
                                <button>
                                    <Link to={`/edit/${val.id}`}>Edit</Link>
                                </button>
                            </td>
                          </tr>
                      )
                    })
                }
            </tbody>
        </table>

        <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default View
