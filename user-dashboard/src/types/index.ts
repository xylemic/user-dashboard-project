export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  username : string;
  role : UserRole;
}

export interface AuthContextType {
  user : User | null;
  login : (user : User) => void;
  logout : () => void;
  isAuthenticated : boolean;
}

