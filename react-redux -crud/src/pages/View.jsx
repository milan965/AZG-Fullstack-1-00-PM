import React from 'react'
import { useSelector } from 'react-redux'

const ViewUser = () => {

    let users = useSelector(state => state.crud.users);
    console.log(users);
    

  return (
    <div align="center">
        <h1>View Users</h1>
    </div>
  )
}

export default ViewUser
