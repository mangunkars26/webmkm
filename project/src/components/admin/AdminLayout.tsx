import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { useAuthStore } from '../../store/authStore';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export function AdminLayout() {
  // const { user, loading } = useAuthStore();

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
  //     </div>
  //   );
  // }

  // if (!user) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}