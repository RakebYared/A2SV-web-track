import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userUtils, tokenUtils } from '../utils/api';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = userUtils.getUser();
    const token = tokenUtils.getToken();
    
    if (!userData || !token) {
      navigate('/signin');
      return;
    }

    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    tokenUtils.removeToken();
    userUtils.removeUser();
    navigate('/signin');
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user.name}!</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h2>Account Information</h2>
          <div className="user-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Authentication Status</h2>
          <p className="status-success">✓ Successfully authenticated</p>
          <p>Your access token is securely stored and ready for API requests.</p>
        </div>

        <div className="dashboard-card">
          <h2>Next Steps</h2>
          <ul>
            <li>Implement protected routes</li>
            <li>Add user profile management</li>
            <li>Integrate with additional API endpoints</li>
            <li>Add more dashboard features</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 