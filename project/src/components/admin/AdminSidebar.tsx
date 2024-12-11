import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Image, Menu } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/admin/blogs', icon: FileText },
  { name: 'Portfolio', href: '/admin/portfolio', icon: Image },
  { name: 'Navigation', href: '/admin/navigation', icon: Menu },
];

export function AdminSidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary">
            <h2 className="text-xl font-bold text-white">WebsiteKu Admin</h2>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto bg-white border-r">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}