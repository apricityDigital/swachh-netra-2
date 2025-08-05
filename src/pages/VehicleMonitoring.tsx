import React, { useState } from 'react';
import { TruckIcon, WrenchScrewdriverIcon, MapPinIcon, FuelIcon } from '@heroicons/react/24/outline';

const VehicleMonitoring: React.FC = () => {
  const vehicles = [
    { id: '1', number: 'PMC-001', type: 'Garbage Truck', driver: 'Rajesh Kumar', status: 'active', location: 'Zone A', fuel: 75, maintenance: 'Good' },
    { id: '2', number: 'PMC-002', type: 'Compactor', driver: 'Amit Patel', status: 'maintenance', location: 'Workshop', fuel: 45, maintenance: 'Due' },
    { id: '3', number: 'PMC-003', type: 'Sweeper', driver: 'Priya Sharma', status: 'active', location: 'Zone B', fuel: 90, maintenance: 'Good' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFuelColor = (fuel: number) => {
    if (fuel > 50) return 'text-green-600';
    if (fuel > 25) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Vehicle Monitoring</h1>
        <button className="btn-primary">Add Vehicle</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <TruckIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{vehicles.filter(v => v.status === 'active').length}</div>
          <div className="text-sm text-gray-500">Active Vehicles</div>
        </div>
        <div className="card text-center">
          <WrenchScrewdriverIcon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-600">{vehicles.filter(v => v.status === 'maintenance').length}</div>
          <div className="text-sm text-gray-500">In Maintenance</div>
        </div>
        <div className="card text-center">
          <FuelIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">
            {Math.round(vehicles.reduce((sum, v) => sum + v.fuel, 0) / vehicles.length)}%
          </div>
          <div className="text-sm text-gray-500">Avg Fuel Level</div>
        </div>
        <div className="card text-center">
          <MapPinIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{vehicles.length}</div>
          <div className="text-sm text-gray-500">Total Fleet</div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{vehicle.number}</h3>
                <p className="text-sm text-gray-500">{vehicle.type}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                {vehicle.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Driver</span>
                <span className="text-sm font-medium">{vehicle.driver}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location</span>
                <span className="text-sm font-medium">{vehicle.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Fuel Level</span>
                <span className={`text-sm font-medium ${getFuelColor(vehicle.fuel)}`}>
                  {vehicle.fuel}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    vehicle.fuel > 50 ? 'bg-green-600' :
                    vehicle.fuel > 25 ? 'bg-yellow-600' : 'bg-red-600'
                  }`}
                  style={{ width: `${vehicle.fuel}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Maintenance</span>
                <span className={`text-sm font-medium ${
                  vehicle.maintenance === 'Good' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {vehicle.maintenance}
                </span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="btn-secondary text-sm flex-1">Track</button>
              <button className="btn-primary text-sm flex-1">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleMonitoring;
