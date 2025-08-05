import React, { useState } from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Attendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const attendanceData = [
    { id: '1', name: 'Rajesh Kumar', checkIn: '08:00', checkOut: '17:00', status: 'present', zone: 'Zone A' },
    { id: '2', name: 'Priya Sharma', checkIn: '08:15', checkOut: '17:15', status: 'present', zone: 'Zone B' },
    { id: '3', name: 'Amit Patel', checkIn: '-', checkOut: '-', status: 'absent', zone: 'Zone C' },
    { id: '4', name: 'Sunita Devi', checkIn: '08:30', checkOut: '16:30', status: 'half-day', zone: 'Zone A' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'half-day': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const presentCount = attendanceData.filter(a => a.status === 'present').length;
  const absentCount = attendanceData.filter(a => a.status === 'absent').length;
  const halfDayCount = attendanceData.filter(a => a.status === 'half-day').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
          <button className="btn-primary">Export Report</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{presentCount}</div>
          <div className="text-sm text-gray-500">Present</div>
        </div>
        <div className="card text-center">
          <XCircleIcon className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600">{absentCount}</div>
          <div className="text-sm text-gray-500">Absent</div>
        </div>
        <div className="card text-center">
          <ClockIcon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-600">{halfDayCount}</div>
          <div className="text-sm text-gray-500">Half Day</div>
        </div>
        <div className="card text-center">
          <CalendarIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">
            {Math.round((presentCount / attendanceData.length) * 100)}%
          </div>
          <div className="text-sm text-gray-500">Attendance Rate</div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {record.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.zone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.checkIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.checkOut}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                      {record.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.status === 'present' ? '9h' : record.status === 'half-day' ? '4h' : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
