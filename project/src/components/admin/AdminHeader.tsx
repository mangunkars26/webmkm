import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { LogOut, User } from 'lucide-react';

export function AdminHeader() {
  const { user, signOut } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">{user?.email}</span>
            </div>
            <button
              onClick={() => signOut()}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm 
                       leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}