import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Requests from './pages/Requests';
import ZoneMonitoring from './pages/ZoneMonitoring';
import Attendance from './pages/Attendance';
import VehicleMonitoring from './pages/VehicleMonitoring';
import Analytics from './pages/Analytics';
import Communication from './pages/Communication';
import SystemSettings from './pages/SystemSettings';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/login" />;
};

// Public Route Component (redirects to dashboard if already logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return user ? <Navigate to="/dashboard" /> : <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/*" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/users" element={<UserManagement />} />
                      <Route path="/requests" element={<Requests />} />
                      <Route path="/zones" element={<ZoneMonitoring />} />
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/vehicles" element={<VehicleMonitoring />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/communication" element={<Communication />} />
                      <Route path="/settings" element={<SystemSettings />} />
                      <Route path="/" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
