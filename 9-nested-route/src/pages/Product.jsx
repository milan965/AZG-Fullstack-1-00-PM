import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Product = () => {

    const [data,setData] = useSearchParams();

    const handleClick = () => {
        setData({
            name : 'mobile'
        })
    }
     
    

  return (
    <div>
        <h1>Product</h1>
        <h1>Category :- {data.get('name')}</h1>
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

                <li>
                    <button onClick={ () => handleClick() }>Click</button>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Product
