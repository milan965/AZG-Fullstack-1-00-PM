import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <Navbar />

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;