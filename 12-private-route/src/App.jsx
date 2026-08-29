import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import PrivateRoute from "./pages/PrivateRoute"
import { useState } from "react"
function App() {

    const [isLogin,setIsLogin] = useState(true)

  return (
    <>

      <Routes>
          {/* public route */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>


        {/* private route */}
        <Route element={<PrivateRoute isLogin={isLogin}/>}>
            <Route path="/dash" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>

        </Route>

      </Routes>

    </>
  )
}

export default App
