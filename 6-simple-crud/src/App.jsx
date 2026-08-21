import { useState } from "react";

function App() {

  const [users,setUsers] = useState(
      localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : []
  );

  const [formdata,setFormData] = useState({
      name : '',
      phone : ''
  })

  const handleChange=  (e) => {
    const {name,value} = e.target
      setFormData({
        ...formdata,
        [name] : value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let allusers = JSON.parse(localStorage.getItem('crud')) ? JSON.parse(localStorage.getItem('crud')) : [];
    let newRecord = {
        id : Date.now(),
        ...formdata
    }
    
  
    allusers.push(newRecord);
    localStorage.setItem('crud',JSON.stringify(allusers));
    setUsers(allusers)

    alert("User Add");
    setFormData({
      name : '',
      phone : ''
    })
    
    

  }

  const handleDelete = (id) => {
      
    let deleteRecord = users.filter((item)=>{
        return item.id != id;
    })
    localStorage.setItem('crud',JSON.stringify(deleteRecord));
    alert("record deleted");
   setUsers(deleteRecord)
    
  }

  return (
    <>
      <div align="center">
          <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
              <table border={1} width="500">
                  <tr>
                      <td>Name :- </td>
                      <td><input type="text" name="name" onChange={handleChange} value={formdata.name} placeholder="Enter name"/></td>
                  </tr>
                  <tr>
                      <td>Phone :- </td>
                      <td><input type="text" name="phone" onChange={handleChange} value={formdata.phone} placeholder="Enter phone"/></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><input type="submit" /></td>
                  </tr>
              </table>
            </form>

            <hr />

          <h1>View Users</h1>
          <table width="500" border="1">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                  {
                      users.map((item)=>{
                        return (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={ () => handleDelete(item.id) }>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                  }
              </tbody>
          </table>

      </div>
    </>
  )
}

export default App
