import ProductCard from "./ProductCard"

import { Products } from "./Products"

function App() {

    let category = ["All","mobile","electronics","cloths"]

    
  


  return (
    <>
      <ProductCard
        categories={category}
        productslist={Products}
      />
    </>
  )
}

export default App
