import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/admin/Dashboard"
import Profile from "./pages/admin/Profile"
import PrivateRoute from "./pages/admin/PrivateRoute"

function App() {

  return (
    <>
      <Routes>

        {/*public route*/}
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        {/* private / protected route */}

        <Route path="admin" element={<PrivateRoute/>}>
            <Route path="dash" element={<Dashboard/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
