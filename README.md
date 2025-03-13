# Dynamic User Dashboard

A React TypeScript application that demonstrates dynamic rendering based on user roles, protected routes, and conditional UI components.

## Features

- **Role-based Authentication**: Simple role selection (Admin, Editor, Viewer)
- **Protected Routes**: Route protection based on authentication status and user role
- **Dynamic Dashboards**: Different dashboard interfaces for each user role
- **Responsive Design**: Fully responsive UI using Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Tailwind CSS
- Vite (for fast development and building)

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navbar.tsx       # Navigation bar with role-based links
│   │   └── Layout.tsx       # Layout wrapper for authenticated pages
│   ├── Dashboard/
│   │   ├── AdminDashboard.tsx   # Admin-specific dashboard view
│   │   ├── EditorDashboard.tsx  # Editor-specific dashboard view
│   │   └── ViewerDashboard.tsx  # Viewer-specific dashboard view
│   └── ProtectedRoute.tsx   # Route guard component for auth/role protection
├── context/
│   └── AuthContext.tsx      # Authentication context and provider
├── pages/
│   ├── LoginPage.tsx        # Login page with role selection
│   ├── DashboardPage.tsx    # Main dashboard container
│   ├── ProfilePage.tsx      # User profile page
│   └── SettingsPage.tsx     # Admin-only settings page
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                  # Main app component with routes
└── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/xylemic/user-dashboard-project.git
   cd user-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser to `http://localhost:5173`

## Usage

1. Login with any username and select a role (Admin, Editor, or Viewer)
2. Explore the different dashboards based on your role
3. Try accessing protected routes:
   - `/settings` is only accessible to Admins
   - `/dashboard` and `/profile` require authentication
4. Use the navbar to navigate between pages
5. Logout to return to the login page

## Authentication Flow

This project uses a simple context-based authentication system:

1. User enters username and selects a role on the login page
2. The `AuthContext` stores the user information
3. Protected routes check the authentication status and user role
4. The navbar displays links based on the user's permissions
5. Logging out clears the user data from context

## Role-Based Features

### Admin
- Full access to all pages
- Admin dashboard with system controls
- Access to the Settings page

### Editor
- Access to Dashboard and Profile pages
- Editor dashboard with content management tools

### Viewer
- Access to Dashboard and Profile pages
- Viewer dashboard with read-only reports

## Customization

### Styling
The project uses Tailwind CSS for styling. Update the `tailwind.config.js` file to customize colors, spacing, and other design tokens.

### Adding New Routes
To add a new protected route:

1. Create a new page component
2. Add the route to `App.tsx` wrapped in a `ProtectedRoute` component
3. Add a link to the navbar if needed

### Extending User Roles
To add a new user role:

1. Update the `UserRole` type in `src/types/index.ts`
2. Create a new dashboard component for the role
3. Update the `renderDashboard` function in `DashboardPage.tsx`
4. Add the role to the dropdown in `LoginPage.tsx`

