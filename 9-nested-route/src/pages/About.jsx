import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <NavLink to={`/about`} className={ ({ isActive }) => isActive ? "active" : '' }>About</NavLink>
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

export default About
