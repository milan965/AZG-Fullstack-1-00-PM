import React from 'react'

const ProductCard = ({key,productitem}) => {
    console.log(productitem);
    
  return (
    <>
        <div
            style={{
                border: "1px solid gray",
                padding: "15px",
                margin: "10px",
                width: "220px",
                borderRadius: "8px",
            }}
        >
            <img src={productitem.image}/>
            <h2>{productitem.name}</h2>
             <p>Category: {productitem.category}</p>

            <h3>₹{productitem.price}</h3>
        
        </div>


    </>
  )
}

export default ProductCard
