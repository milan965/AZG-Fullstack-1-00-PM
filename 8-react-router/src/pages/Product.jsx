import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Product = () => {

    const {postId , userId} = useParams();
   
    console.log(postId);
    console.log(userId);

    


    
    

  return (
    <div>
        <h1>Product Id :- {postId}</h1>
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

export default Product
