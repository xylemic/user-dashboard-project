const AdminDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-puprle-800">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">User Management</h3>
          <p className="mb-4">Manage user accounts and permissions.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Manage Users
          </button>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">System Settings</h3>
          <p className="mb-4">Configure system settings and preferences.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            System Configuration
          </button>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Analytics</h3>
          <p className="mb-4">View system analytics and reports.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            View Reports
          </button>
      </div>

      <div className="bg-red-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Security</h3>
        <p className="mb-4">Manage security settings and logs.</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Security Center
        </button>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;


