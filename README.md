# Pune Municipal Corporation - Admin Dashboard

A comprehensive admin dashboard for managing waste collection operations in Pune Municipal Corporation using React, Firebase, and Tailwind CSS.

## Features

### 🔐 Authentication
- Firebase Authentication with email/password
- Protected routes and session management
- Secure admin access

### 📊 Dashboard
- Real-time statistics for workers, vehicles, drivers, and zones
- Quick action buttons
- Recent activity feed
- Performance metrics

### 👥 User Management
- Manage workers, drivers, and supervisors
- Role-based access control
- User status tracking
- Search and filter functionality

### 📋 Request Management
- Track citizen requests and complaints
- Priority-based categorization
- Status tracking (pending, in-progress, completed, rejected)
- Zone-wise request management

### 🗺️ Zone Monitoring
- Real-time zone coverage tracking
- Worker and vehicle allocation per zone
- Performance metrics per zone
- Interactive zone management

### ⏰ Attendance Management
- Daily attendance tracking
- Check-in/check-out times
- Attendance reports and analytics
- Zone-wise attendance overview

### 🚛 Vehicle Monitoring
- Real-time vehicle tracking
- Fuel level monitoring
- Maintenance scheduling
- Driver assignment

### 📈 Analytics & Reports
- Performance analytics
- Trend analysis
- Exportable reports
- Data visualization

### 💬 Communication Center
- Broadcast messages to staff
- Announcements management
- Role-based messaging
- Communication statistics

### ⚙️ System Settings
- Notification preferences
- Security settings
- Database management
- System configuration

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "SWACH NETRA APP"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   
   Update the Firebase configuration in `src/config/firebase.ts`:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Enable Firebase services**
   - Authentication (Email/Password)
   - Firestore Database
   - Storage (optional)

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Firebase Setup

### Authentication
1. Go to Firebase Console > Authentication
2. Enable Email/Password sign-in method
3. Create admin users manually or through the console

### Firestore Database
1. Create a Firestore database
2. Set up the following collections:
   - `users` - Store user information
   - `vehicles` - Vehicle data
   - `zones` - Zone information
   - `requests` - Citizen requests
   - `attendance` - Attendance records

### Security Rules
Update Firestore security rules to restrict access to authenticated users:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Demo Credentials

For demonstration purposes, you can use any email/password combination to log in. In production, this should be connected to your actual Firebase project with proper user management.

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   └── layout/         # Layout components (Header, Sidebar)
├── contexts/           # React contexts (Auth)
├── pages/              # Page components
├── config/             # Configuration files
└── styles/             # CSS files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
