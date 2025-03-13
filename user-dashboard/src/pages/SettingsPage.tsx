import Layout from '../components/Layout/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600">System configuration and settings</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">System Settings</h2>
        <p className="mb-6 text-gray-600">
          These settings control global system behavior. Changes will affect all users.
        </p>
        
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-3">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  System Name
                </label>
                <input
                  type="text"
                  className="w-full md:w-1/2 px-3 py-2 border rounded-md"
                  defaultValue="User Dashboard"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Language
                </label>
                <select className="w-full md:w-1/2 px-3 py-2 border rounded-md">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenance-mode"
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="maintenance-mode" className="ml-2 text-sm text-gray-700">
                  Enable Maintenance Mode
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-3">Security Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  className="w-full md:w-1/2 px-3 py-2 border rounded-md"
                  defaultValue="30"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="two-factor"
                  className="h-4 w-4 text-blue-600 rounded"
                  defaultChecked
                />
                <label htmlFor="two-factor" className="ml-2 text-sm text-gray-700">
                  Require Two-Factor Authentication
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="password-policy"
                  className="h-4 w-4 text-blue-600 rounded"
                  defaultChecked
                />
                <label htmlFor="password-policy" className="ml-2 text-sm text-gray-700">
                  Enforce Strong Password Policy
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">User Management</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default User Role
                </label>
                <select className="w-full md:w-1/2 px-3 py-2 border rounded-md">
                  <option>Viewer</option>
                  <option>Editor</option>
                  <option>Admin</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="auto-approve"
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="auto-approve" className="ml-2 text-sm text-gray-700">
                  Auto-approve New User Registrations
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Changes
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            Reset to Defaults
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;

