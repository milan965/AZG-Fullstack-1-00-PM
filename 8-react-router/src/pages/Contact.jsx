import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <Link to="/about">About</Link>
                </li>
                 <li>
                    <Link to="/contact">Contact</Link>
                </li>
                 <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Contact
