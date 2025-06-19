
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Student',
    email: 'student@demo.com',
    role: 'student',
    joinDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Teacher',
    email: 'teacher@demo.com',
    role: 'teacher',
    joinDate: '2023-09-10'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@demo.com',
    role: 'admin',
    joinDate: '2023-01-01'
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role?: UserRole): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let foundUser = mockUsers.find(u => u.email === email);
    
    // If no user found but demo role provided, create demo user
    if (!foundUser && role) {
      foundUser = {
        id: Date.now().toString(),
        name: `Demo ${role.charAt(0).toUpperCase() + role.slice(1)}`,
        email: email,
        role: role,
        joinDate: new Date().toISOString().split('T')[0]
      };
    }
    
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    
    return false;
  };

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
      joinDate: new Date().toISOString().split('T')[0]
    };
    
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
