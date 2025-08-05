import React, { useState } from 'react';
import { CogIcon, ShieldCheckIcon, DatabaseIcon, BellIcon } from '@heroicons/react/24/outline';

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    system: {
      autoBackup: true,
      maintenanceMode: false,
      debugMode: false,
    },
    security: {
      twoFactor: true,
      sessionTimeout: 30,
      passwordExpiry: 90,
    }
  });

  const handleToggle = (section: string, key: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [key]: !(prev as any)[section][key]
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <button className="btn-primary">Save Changes</button>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <div className="flex items-center mb-4">
          <BellIcon className="h-6 w-6 text-gray-400 mr-3" />
          <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <button
              onClick={() => handleToggle('notifications', 'email')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.email ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">SMS Notifications</p>
              <p className="text-sm text-gray-500">Receive notifications via SMS</p>
            </div>
            <button
              onClick={() => handleToggle('notifications', 'sms')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.sms ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.notifications.sms ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-500">Receive push notifications</p>
            </div>
            <button
              onClick={() => handleToggle('notifications', 'push')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.push ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.notifications.push ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* System Settings */}
      <div className="card">
        <div className="flex items-center mb-4">
          <CogIcon className="h-6 w-6 text-gray-400 mr-3" />
          <h3 className="text-lg font-medium text-gray-900">System Configuration</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Auto Backup</p>
              <p className="text-sm text-gray-500">Automatically backup data daily</p>
            </div>
            <button
              onClick={() => handleToggle('system', 'autoBackup')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.system.autoBackup ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.system.autoBackup ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Maintenance Mode</p>
              <p className="text-sm text-gray-500">Enable maintenance mode</p>
            </div>
            <button
              onClick={() => handleToggle('system', 'maintenanceMode')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.system.maintenanceMode ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.system.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-6 w-6 text-gray-400 mr-3" />
          <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Require 2FA for admin access</p>
            </div>
            <button
              onClick={() => handleToggle('security', 'twoFactor')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.security.twoFactor ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.security.twoFactor ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Session Timeout</p>
              <p className="text-sm text-gray-500">Auto logout after inactivity (minutes)</p>
            </div>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                security: { ...prev.security, sessionTimeout: parseInt(e.target.value) }
              }))}
              className="w-20 px-3 py-1 border border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="card">
        <div className="flex items-center mb-4">
          <DatabaseIcon className="h-6 w-6 text-gray-400 mr-3" />
          <h3 className="text-lg font-medium text-gray-900">Database Management</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-secondary">Backup Database</button>
          <button className="btn-secondary">Export Data</button>
          <button className="btn-secondary">Clear Cache</button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
