
import { useState } from "react";

function App() {

  const [users, setUsers] = useState(
    localStorage.getItem("crud") ? JSON.parse(localStorage.getItem("crud")) : []
  );
  const [formdata, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [editId,setEditId] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


      if(editId){
            let up = users.map((val)=>{
                if(val.id === editId){
                  val.name = formdata.name
                  val.phone = formdata.phone
                }
                return val
            })
            localStorage.setItem('crud',JSON.stringify(up))
            setUsers(up);
            setEditId(null);
            alert("User Update")
            
      }else{
          const newRecord = {
            id: Date.now(),
            ...formdata
          };

          let allusers = [...users,newRecord]      
          localStorage.setItem('crud',JSON.stringify(allusers))
          setUsers(allusers)
          alert("User Added");
      }

      
      //clear input value
      setFormData({
        name: "",
        phone: ""
      });
  };

  // DELETE
  const handleDelete = (id) => {
    const deleteRecord = users.filter((item) => item.id !== id);

    localStorage.setItem("crud", JSON.stringify(deleteRecord));
    setUsers(deleteRecord);

    alert("Record Deleted");
  };


  // EDIT

  const handleEdit = (id) => {
    let single = users.find((item)=>{
        return item.id == id
    });
  
    setFormData({
        name : single.name,
        phone : single.phone
    })

    setEditId(id);
    
  } 


  const handleCancel = () => {
    setEditId(null)
    setFormData({
      name : '',
      phone : ''
    })
  }

  return (
    <>
      <div align="center">
        <h1>Add Students</h1>

        <form onSubmit={handleSubmit}>
          <table border="1" width="500">
            <tbody>
              <tr>
                <td>Name :-</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formdata.name}
                    placeholder="Enter name"
                  />
                </td>
              </tr>

              <tr>
                <td>Phone :-</td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formdata.phone}
                    placeholder="Enter phone"
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value={editId !== null ? "Update" : "Add"}
                  />

                 {
                    editId !== null && (
                       <input type="button" value="Cancel" onClick={ () => handleCancel() }/>
                    )
                 }

                </td>
              </tr>
            </tbody>
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
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>

                   <button onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;