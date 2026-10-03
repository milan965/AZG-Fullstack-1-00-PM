import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [alldata,setAllData] = useState([])

  const getTodos = async() => {

    //fetch method

      // try{
      //   let res = await fetch(`https://dummyjson.com/todos`,{
      //       headers:{
      //         'Content-Type':'application/json'
      //       },
      //       method:"GET"
      //   })
      //   let result = await res.json()
      //   setAllData(result.todos);
        
      // }catch(err){
      //   console.log(err);
      //   return false
      // }


      // try{
      //     let result = await axios.get(`https://dummyjson.com/todos`,{
      //       headers:{
      //         'Content-Type':'application/json'
      //       },
      //       method:"GET"
      //     })
     
      //     let res = result.data;
          
      //     setAllData(res.todos)
          
          
          

      // }catch(err){
      //   console.log(err);
      //   return false
      // }

      // api call json server

      try{
        let result = await axios(`http://localhost:8000/users`,{
            method:"GET",
            headers:{
              'Content-Type':'application/json'
            }
        })

        let res = await result.data;
        console.log(res);
        

      }catch(err){
        console.log(err);
        return false
        
      }

  }


  useEffect(()=>{
      getTodos();
  },[])


  return (
    <>
      <h1>Hello</h1>
      <hr />

      <table border={1} width="500" align="center">
          <thead>
              <tr>
                <th>Id</th>
                <th>Todo</th>
              </tr>
          </thead>
          <tbody>

          {

              alldata.map((val,i)=>{
                return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.todo}</td>
                    </tr>
                )
              })

          }

          </tbody>
      </table>

    </>
  )
}

export default App
