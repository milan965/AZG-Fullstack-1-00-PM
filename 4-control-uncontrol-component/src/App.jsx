import { useState } from "react"
import Uncontrol from "./Uncontrol";

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = () => {
      console.log(name);
      alert("Form submit");
      setName("");
      
  }

  const formHandleSubmit = (event) => {
      event.preventDefault();
      console.log(email);
      console.log(password);
      
      
      alert("form submit")
      setEmail("");
      setPassword("");
  }

  return (
      <>

       {/* <div align="center">
           <form>
                <p>
                  <label htmlFor="name">Name :- </label>
                  <input type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter name"/>
                </p>

                <p>
                  <input type="button" onClick={ () => handleSubmit()} value="submit"/>
                </p>
            </form>
       </div>

       <h1 align="center">Login Form</h1>

       <div align="center">
            <form onSubmit={formHandleSubmit}>
                <p>
                  <label htmlFor="email">Email :- </label>
                  <input type="email" name="email" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </p>
                 <p>
                  <label htmlFor="password">Password :- </label>
                  <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </p>
                <p>
                  <input type="submit" value="Login"/>
                </p>
            </form>
       </div> */}


        <Uncontrol/>

      </>
  )
}

export default App
