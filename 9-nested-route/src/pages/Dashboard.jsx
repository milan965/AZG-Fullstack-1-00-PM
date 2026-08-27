import React from 'react'
import {useLocation , Link} from 'react-router-dom'

const Dashboard = () => {

  const location = useLocation()
  console.log(location);
  

  return (
    <div>
        <h1>Welcome to Dashboard {location.state.age}</h1>
        <ul>
          <li>
              <Link to={`/`}>Home</Link>
          </li>
           <li>
              <Link to={'/about'}>About</Link>
          </li>
           <li>
              <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
              <Link to={'/product'}>Product</Link>
          </li>
        </ul>
    </div>
  )
}

export default Dashboard
