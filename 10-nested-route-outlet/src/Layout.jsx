import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">

      <header>
        <h1>My Website</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main>

        {/* 
          Child route will be displayed here
        */}
        <Outlet />

      </main>

      <footer>
        <p>© 2026 My Website</p>
      </footer>

    </div>
  );
}

export default Layout;