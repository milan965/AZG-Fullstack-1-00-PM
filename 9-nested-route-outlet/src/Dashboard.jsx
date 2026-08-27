import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">

      <h2>Dashboard</h2>

      <p>
        Welcome to Dashboard.
      </p>

      <nav className="dashboard-nav">
        <Link to="/dashboard/profile">
          Profile
        </Link>

        <Link to="/dashboard/settings">
          Settings
        </Link>
      </nav>

      <hr />

      {/* 
        Profile or Settings will appear here
      */}
      <Outlet />

    </div>
  );
}

export default Dashboard;