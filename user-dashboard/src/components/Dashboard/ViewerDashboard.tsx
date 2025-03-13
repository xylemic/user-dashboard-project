const ViewerDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Viewer Dashboard</h2>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Available Reports</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* report cards */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
            <h4 className="font-medium text-green-700">User Activity</h4>
            <p className="text-sm text-gray-600 mt-2">View user engagement metrics and trends.</p>
            <button className="mt-4 text-green-700 text-sm font-medium hover:text-green-800">
              View Report →
            </button>
          </div>
        </div>
      </div>
      
      {/* recent activity */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        {/* activity feed */}
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span>New user activity report available</span>
            <span className="text-xs text-gray-500 ml-2">Today</span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span>Content performance metrics updated</span>
            <span className="text-xs text-gray-500 ml-2">Yesterday</span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span>Monthly summary for February available</span>
            <span className="text-xs text-gray-500 ml-2">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewerDashboard;

