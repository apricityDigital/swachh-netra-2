import React, { useState } from 'react';
import { PaperAirplaneIcon, BellIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

const Communication: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState('all');

  const announcements = [
    { id: '1', title: 'New Safety Protocols', content: 'Please follow the updated safety guidelines...', date: '2024-08-05', type: 'safety' },
    { id: '2', title: 'Schedule Change', content: 'Collection schedule updated for Zone A...', date: '2024-08-04', type: 'schedule' },
    { id: '3', title: 'Training Session', content: 'Mandatory training session on August 10th...', date: '2024-08-03', type: 'training' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'safety': return 'bg-red-100 text-red-800';
      case 'schedule': return 'bg-blue-100 text-blue-800';
      case 'training': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Communication Center</h1>
        <button className="btn-primary flex items-center">
          <BellIcon className="h-5 w-5 mr-2" />
          Send Notification
        </button>
      </div>

      {/* Send Message */}
      <div className="card">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Send Message</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
            <select
              value={selectedRecipients}
              onChange={(e) => setSelectedRecipients(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Staff</option>
              <option value="workers">Workers Only</option>
              <option value="drivers">Drivers Only</option>
              <option value="supervisors">Supervisors Only</option>
              <option value="zone-a">Zone A Staff</option>
              <option value="zone-b">Zone B Staff</option>
              <option value="zone-c">Zone C Staff</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex space-x-2">
            <button className="btn-primary flex items-center">
              <PaperAirplaneIcon className="h-4 w-4 mr-2" />
              Send Message
            </button>
            <button className="btn-secondary">Save Draft</button>
          </div>
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Announcements</h3>
          <button className="btn-secondary flex items-center text-sm">
            <MegaphoneIcon className="h-4 w-4 mr-2" />
            New Announcement
          </button>
        </div>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(announcement.type)}`}>
                      {announcement.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{announcement.content}</p>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(announcement.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-600">156</div>
          <div className="text-sm text-gray-500">Messages Sent Today</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600">98%</div>
          <div className="text-sm text-gray-500">Delivery Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-purple-600">12</div>
          <div className="text-sm text-gray-500">Active Announcements</div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
