import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>

        <nav>
            <ul>
                <li>
                    {/* <Link to="/">Home</Link> */}
                    <NavLink to={`/`} className={   ({ isActive }) => isActive ? "active" : ""}
>Home</NavLink>
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

export default Home
