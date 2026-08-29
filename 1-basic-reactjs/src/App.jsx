import { useEffect, useState } from 'react'
import Student from './Student'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {

  let [cnt,setCnt] = useState(0)

  useEffect(()=>{
      setTimeout(()=>{
        setCnt(cnt = cnt + 1)
      },1000);
  },[cnt])  
  
  const handleClick = () => {
      setCnt(cnt = cnt + 1);
  }


  useEffect(()=>{
    console.log("running");  
  },[cnt])




  return (
    <>

  <h2>Count :- {cnt}</h2>
      {/* <div align="center">
        <h1>No :- {cnt}</h1>
        <button onClick={ () => handleClick() } type='button'>Click</button>
        <hr />
         
      </div> */}

      {/* <Student
          username='jay'
          age={21}
          city='surat'
      /> */}

       <button className='btn btn-danger' onClick={ () => handleClick() } type='button'>Click</button>
    </>
  )
}

export default App
