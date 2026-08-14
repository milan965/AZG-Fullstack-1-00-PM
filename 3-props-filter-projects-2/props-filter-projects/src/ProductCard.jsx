import React, { useState } from 'react'

const ProductCard = ({categories,productslist}) => {

    const [filterData,setFilterData] = useState([]);

    const categoryFilter = (cat) => {
        
        let filter = productslist.filter((p)=>{
            return p.category === cat
        })

       setFilterData(filter)
        
        
    }

  return (
    <div>
        {
            categories.map((cat,index)=>{
                return (
                    <button key={index} onClick={ () => categoryFilter(cat) }>{cat}</button>
                )
            })
        }
    <hr />


      {
            filterData.length !== 0 ? (
                <>
                     <div style={{display:'flex',flexWrap:'wrap'}}>
                            {
                                filterData.map((item)=>{
                                    return (
                                        <div width="24%" key={item.id} style={{margin:'10px',border:'1px solid black'}}>
                                            <img src={item.image} width="200"/>
                                        </div>
                                    )
                                })
                            }
                     </div>
                </>
            ) : (
                <>
                     <div style={{display:'flex',flexWrap:'wrap'}}>
                            {
                                productslist.map((item)=>{
                                    return (
                                        <div width="24%" key={item.id} style={{margin:'10px',border:'1px solid black'}}>
                                            <img src={item.image} width="200"/>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </>
            )
      }

    </div>
  )
}

export default ProductCard
