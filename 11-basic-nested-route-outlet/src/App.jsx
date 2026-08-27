import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
      <Routes>

          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="setting" element={<Settings/>}/>
          </Route>
      </Routes>  

    
  );
}

export default App;