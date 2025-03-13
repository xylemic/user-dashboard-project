import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  // don't render navbar if user is not authenticated
  if (!isAuthenticated || !user) return null;

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">User Dashboard</div>

        <div className="space-x-4 flex items-center">
          {/* user info */}
          <span className="text-sm">
            {user.username} ({user.role})
          </span>

          {/* nav links */}
          <div className="space-x-4">
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            {/* only show settings link for admin */}
            {user.role === 'Admin' && (
              <Link to="/settings" className="hover:text-gray-300">
                Settings
              </Link>
            )}
            <button
              onClick={logout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

