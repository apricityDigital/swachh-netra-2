import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  MapIcon,
  ClockIcon,
  TruckIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'User Management', href: '/users', icon: UsersIcon },
  { name: 'Requests', href: '/requests', icon: DocumentTextIcon },
  { name: 'Zone Monitoring', href: '/zones', icon: MapIcon },
  { name: 'Attendance', href: '/attendance', icon: ClockIcon },
  { name: 'Vehicle Monitoring', href: '/vehicles', icon: TruckIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Communication', href: '/communication', icon: ChatBubbleLeftRightIcon },
  { name: 'System Settings', href: '/settings', icon: CogIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-gray-600 bg-opacity-75"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PMC</span>
              </div>
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">Admin</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`
                    sidebar-link
                    ${isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            <p>Swach Netra Admin</p>
            <p>Version 1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
