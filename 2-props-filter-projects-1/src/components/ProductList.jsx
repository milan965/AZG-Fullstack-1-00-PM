import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({productsItem,category}) => {

   let filterProducts = category === "All" ? productsItem :
      productsItem.filter(item => item.category === category)
   
   


    

  return (
    <>
        <div style={{
                display: "flex",
                flexWrap: "wrap",
        }}>

        {
            filterProducts.map((item)=>{
                return (
                    <ProductCard
                        key={item.id}
                        productitem={item}
                    />

                )
            })
        }

        </div>
    </>
  )
}

export default ProductList
