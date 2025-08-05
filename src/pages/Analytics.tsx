import React from 'react';
import { ChartBarIcon, TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline';

const Analytics: React.FC = () => {
  const metrics = [
    { title: 'Collection Efficiency', value: '94.2%', change: '+2.1%', trend: 'up' },
    { title: 'Worker Productivity', value: '87.5%', change: '+5.3%', trend: 'up' },
    { title: 'Vehicle Utilization', value: '78.9%', change: '-1.2%', trend: 'down' },
    { title: 'Citizen Satisfaction', value: '91.7%', change: '+3.4%', trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
        <div className="flex space-x-2">
          <button className="btn-secondary">Export Data</button>
          <button className="btn-primary">Generate Report</button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <div className="flex items-center mt-1">
                  {metric.trend === 'up' ? (
                    <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <ChartBarIcon className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Collection Trends</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart will be rendered here</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Zone Performance</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart will be rendered here</p>
          </div>
        </div>
      </div>

      {/* Reports */}
      <div className="card">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {[
            { name: 'Monthly Collection Report', date: '2024-08-01', size: '2.3 MB' },
            { name: 'Worker Performance Analysis', date: '2024-07-28', size: '1.8 MB' },
            { name: 'Vehicle Maintenance Summary', date: '2024-07-25', size: '1.2 MB' },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{report.name}</p>
                <p className="text-sm text-gray-500">Generated on {report.date} • {report.size}</p>
              </div>
              <button className="btn-secondary text-sm">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
