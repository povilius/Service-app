import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/add-category">
        <button>Add Category</button>
      </Link>
      <Link to="/add-business">
        <button>Add Business</button>
      </Link>
    </div>
  );
}

export default AdminDashboard;
