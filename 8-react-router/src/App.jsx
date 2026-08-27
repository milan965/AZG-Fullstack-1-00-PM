import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import './assets/style.css'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  
  return (
    <>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route 
              path="/dashboard" 
              element={<Dashboard/>}
          />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
