import React, { useState } from 'react';
import { MapIcon, TruckIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Zone {
  id: string;
  name: string;
  area: string;
  activeWorkers: number;
  totalWorkers: number;
  activeVehicles: number;
  totalVehicles: number;
  lastCollection: string;
  status: 'active' | 'inactive' | 'maintenance';
  coverage: number;
}

const ZoneMonitoring: React.FC = () => {
  const [zones] = useState<Zone[]>([
    {
      id: '1',
      name: 'Zone A - Central',
      area: 'Shivajinagar, Camp',
      activeWorkers: 45,
      totalWorkers: 50,
      activeVehicles: 8,
      totalVehicles: 10,
      lastCollection: '2024-08-05T08:30:00',
      status: 'active',
      coverage: 95
    },
    {
      id: '2',
      name: 'Zone B - East',
      area: 'Koregaon Park, Kalyani Nagar',
      activeWorkers: 38,
      totalWorkers: 45,
      activeVehicles: 6,
      totalVehicles: 8,
      lastCollection: '2024-08-05T09:15:00',
      status: 'active',
      coverage: 88
    },
    {
      id: '3',
      name: 'Zone C - West',
      area: 'Baner, Aundh',
      activeWorkers: 25,
      totalWorkers: 40,
      activeVehicles: 4,
      totalVehicles: 7,
      lastCollection: '2024-08-05T07:45:00',
      status: 'maintenance',
      coverage: 72
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCoverageColor = (coverage: number) => {
    if (coverage >= 90) return 'text-green-600';
    if (coverage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Zone Monitoring</h1>
        <button className="btn-primary">View Map</button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <MapIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{zones.length}</div>
          <div className="text-sm text-gray-500">Total Zones</div>
        </div>
        <div className="card text-center">
          <UsersIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">
            {zones.reduce((sum, zone) => sum + zone.activeWorkers, 0)}
          </div>
          <div className="text-sm text-gray-500">Active Workers</div>
        </div>
        <div className="card text-center">
          <TruckIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">
            {zones.reduce((sum, zone) => sum + zone.activeVehicles, 0)}
          </div>
          <div className="text-sm text-gray-500">Active Vehicles</div>
        </div>
        <div className="card text-center">
          <ClockIcon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">
            {Math.round(zones.reduce((sum, zone) => sum + zone.coverage, 0) / zones.length)}%
          </div>
          <div className="text-sm text-gray-500">Avg Coverage</div>
        </div>
      </div>

      {/* Zones Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {zones.map((zone) => (
          <div key={zone.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{zone.name}</h3>
                <p className="text-sm text-gray-500">{zone.area}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(zone.status)}`}>
                {zone.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Workers</span>
                <span className="text-sm font-medium">
                  {zone.activeWorkers}/{zone.totalWorkers}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${(zone.activeWorkers / zone.totalWorkers) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Vehicles</span>
                <span className="text-sm font-medium">
                  {zone.activeVehicles}/{zone.totalVehicles}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${(zone.activeVehicles / zone.totalVehicles) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Coverage</span>
                <span className={`text-sm font-medium ${getCoverageColor(zone.coverage)}`}>
                  {zone.coverage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    zone.coverage >= 90 ? 'bg-green-600' :
                    zone.coverage >= 75 ? 'bg-yellow-600' : 'bg-red-600'
                  }`}
                  style={{ width: `${zone.coverage}%` }}
                ></div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Collection</span>
                  <span className="text-gray-900">
                    {new Date(zone.lastCollection).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="btn-secondary text-sm flex-1">View Details</button>
              <button className="btn-primary text-sm flex-1">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoneMonitoring;
