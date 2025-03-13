import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout/Layout';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">User Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-6 mb-6">
          <div className="bg-blue-600 text-white text-2xl font-bold h-20 w-20 rounded-full flex items-center justify-center">
            {user.username.charAt(0).toUpperCase()}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <div className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
              {user.role}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Account Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-500">Username</label>
                <div className="mt-1 text-gray-900">{user.username}</div>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-500">Role</label>
                <div className="mt-1 text-gray-900">{user.role}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Account Created</label>
                <div className="mt-1 text-gray-900">March 13, 2025</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Preferences</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                  <div className="text-sm text-gray-500">Receive email notifications</div>
                </div>
                <div className="form-switch">
                  <input type="checkbox" className="h-5 w-10 rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dark Mode</label>
                  <div className="text-sm text-gray-500">Use dark theme</div>
                </div>
                <div className="form-switch">
                  <input type="checkbox" className="h-5 w-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Update Profile
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            Change Password
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;

