import React, { useRef } from 'react'

const Uncontrol = () => {

    const name = useRef();
    const email = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);

        
        alert("submit")
        name.current.value = "";
    }

  return (
    <div align="center">
        <h1>Uncontrol</h1>
        <form onSubmit={handleSubmit}>

            <p>
                <label htmlFor="name">Name :- </label>
                <input type="text" ref={name}  placeholder='Enter name'/>
            </p>

             <p>
                <label htmlFor="name">Email :- </label>
                <input type="text" ref={email}  placeholder='Enter name'/>
            </p>


            <p>
                <input type="submit" value="submit"/>
            </p>

        </form>
    </div>
  )
}

export default Uncontrol
