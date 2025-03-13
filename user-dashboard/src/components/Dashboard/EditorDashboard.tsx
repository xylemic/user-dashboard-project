const EditorDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Editor Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Content Management</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-4">Create and edit content for the platform.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-3 rounded bg-white">
              <h4 className="font-medium">Recent Articles</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Getting Started with React</li>
                <li>Advanced TypeScript Patterns</li>
                <li>Building a Progressive Web App</li>
                <li>Deploying a Serverless Application</li>
                <li>Building a GraphQL API</li>
                <li>Tailwind CSS Best Practices</li>
              </ul>
            </div>

            <div className="border p-3 rounded bg-white">
              <h4 className="font-medium">Pending Reviews</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Introduction to Vite</li>
                <li>React Router Guide</li>
                <li>Custom Hooks and React Hooks Guide</li>
                <li>Using Redux with React</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Publish New Article
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              View All Articles
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Content Calender</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-4">Manage upcoming content schedule.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Open Calender
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorDashboard;

