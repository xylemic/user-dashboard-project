import { useAuth } from "../context/AuthContext";
import Layout from "../components/Layout/Layout";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import EditorDashboard from "../components/Dashboard/EditorDashboard";
import ViewerDashboard from "../components/Dashboard/ViewerDashboard";

const DashboardPage = () => {
  const { user } = useAuth();

  // render different dashboard based on user role
  const renderDashboard = () => {
    switch (user?.role) {
      case 'Admin':
        return <AdminDashboard />;
      case 'Editor':
        return <EditorDashboard />;
      case 'Viewer':
        return <ViewerDashboard />;
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your personalized dashboard</p>
      </div>

      {renderDashboard()}
    </Layout>
  );
}

export default DashboardPage;

