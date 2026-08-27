import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <header>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                 <li>
                    <Link to={`/about`}>About</Link>
                </li>
                 <li>
                    <Link to={`/profile`}>Profile</Link>
                </li>
                 <li>
                    <Link to={`/setting`}>Setting</Link>
                </li>
            </ul>
        </header>
  )
}

export default Header
