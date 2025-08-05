import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface Request {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  submittedBy: string;
  submittedDate: string;
  zone: string;
}

const Requests: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const [requests] = useState<Request[]>([
    {
      id: '1',
      title: 'Garbage Collection Delay',
      description: 'Garbage not collected for 3 days in Sector 15',
      status: 'pending',
      priority: 'high',
      submittedBy: 'Citizen App',
      submittedDate: '2024-08-05',
      zone: 'Zone A'
    },
    {
      id: '2',
      title: 'Vehicle Maintenance Request',
      description: 'Truck PMC-001 needs immediate maintenance',
      status: 'in-progress',
      priority: 'medium',
      submittedBy: 'Driver Portal',
      submittedDate: '2024-08-04',
      zone: 'Zone B'
    },
    {
      id: '3',
      title: 'New Collection Point',
      description: 'Request to add new collection point in residential area',
      status: 'completed',
      priority: 'low',
      submittedBy: 'Admin Portal',
      submittedDate: '2024-08-03',
      zone: 'Zone C'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = requests.filter(request => 
    selectedStatus === 'all' || request.status === selectedStatus
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Requests Management</h1>
        <div className="flex space-x-2">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <ClockIcon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-600">{requests.filter(r => r.status === 'pending').length}</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="card text-center">
          <DocumentTextIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{requests.filter(r => r.status === 'in-progress').length}</div>
          <div className="text-sm text-gray-500">In Progress</div>
        </div>
        <div className="card text-center">
          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{requests.filter(r => r.status === 'completed').length}</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
        <div className="card text-center">
          <XCircleIcon className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600">{requests.filter(r => r.status === 'rejected').length}</div>
          <div className="text-sm text-gray-500">Rejected</div>
        </div>
      </div>

      {/* Requests List */}
      <div className="card">
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{request.title}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                      {request.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(request.priority)}`}>
                      {request.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{request.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Zone: {request.zone}</span>
                    <span>By: {request.submittedBy}</span>
                    <span>Date: {new Date(request.submittedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-900">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
