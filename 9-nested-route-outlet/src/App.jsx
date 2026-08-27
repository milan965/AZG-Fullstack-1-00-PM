import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <Routes>

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>

        {/* / */}
        <Route index element={<Home />} />

        {/* /about */}
        <Route path="about" element={<About />} />

        {/* /contact */}
        <Route path="contact" element={<Contact />} />

        {/* /dashboard */}
        <Route path="dashboard" element={<Dashboard />}>

          {/* /dashboard/profile */}
          <Route path="profile" element={<Profile />} />

          {/* /dashboard/settings */}
          <Route path="settings" element={<Settings />} />

        </Route>

      </Route>

    </Routes>
  );
}

export default App;