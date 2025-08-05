import React, { useState, useEffect } from 'react';
import { 
  UsersIcon, 
  TruckIcon, 
  MapIcon, 
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ComponentType<any>;
  change: number;
  changeType: 'increase' | 'decrease';
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeType, 
  color 
}) => {
  return (
    <div className="card">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
          <div className="flex items-center mt-1">
            {changeType === 'increase' ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-sm ml-1 ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {Math.abs(change)}% from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalWorkers: 0,
    totalVehicles: 0,
    totalDrivers: 0,
    activeZones: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in real app, this would come from Firestore
      setStats({
        totalWorkers: 1247,
        totalVehicles: 89,
        totalDrivers: 156,
        activeZones: 24
      });
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card animate-pulse">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Workers"
          value={stats.totalWorkers}
          icon={UsersIcon}
          change={8.2}
          changeType="increase"
          color="bg-blue-500"
        />
        <StatCard
          title="Total Vehicles"
          value={stats.totalVehicles}
          icon={TruckIcon}
          change={3.1}
          changeType="increase"
          color="bg-green-500"
        />
        <StatCard
          title="Total Drivers"
          value={stats.totalDrivers}
          icon={ClockIcon}
          change={2.4}
          changeType="decrease"
          color="bg-yellow-500"
        />
        <StatCard
          title="Active Zones"
          value={stats.activeZones}
          icon={MapIcon}
          change={5.7}
          changeType="increase"
          color="bg-purple-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[
              { action: 'New worker registered', time: '2 minutes ago', type: 'success' },
              { action: 'Vehicle maintenance scheduled', time: '15 minutes ago', type: 'warning' },
              { action: 'Zone coverage updated', time: '1 hour ago', type: 'info' },
              { action: 'Attendance report generated', time: '2 hours ago', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-primary text-sm py-3">
              Add Worker
            </button>
            <button className="btn-secondary text-sm py-3">
              Schedule Vehicle
            </button>
            <button className="btn-secondary text-sm py-3">
              View Reports
            </button>
            <button className="btn-secondary text-sm py-3">
              Manage Zones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
