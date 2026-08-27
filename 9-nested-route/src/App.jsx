import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Product from "./Product"
import Add_Product from "./Add_Product"

function App() {
  
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>

        {/* Nested Route*/}
        <Route path="admin">
              <Route index element={<Dashboard/>}/>
              <Route path="about" element={<About/>}/>
        </Route>


        <Route path="product">
            <Route index element={<Product/>}/>
            <Route path="add" element={<Add_Product/>}/>

        </Route>

      </Routes>
    </>
  )
}

export default App
