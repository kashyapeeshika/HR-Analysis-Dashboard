import React, { useState } from 'react';

const Notifications = () => {
  // Example notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message!', read: false },
    { id: 2, message: 'Your profile was updated successfully.', read: false },
    { id: 3, message: 'A new user has joined your team.', read: true },
  ]);

  // Mark all notifications as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div 
      style={{ 
        padding: '20px', 
        maxWidth: '400px', 
        borderRadius: '8px', 
      }}
    >
      <h3 style={{ 
        color: '#508CA4', 
        textAlign: 'center', 
        marginBottom: '20px' }}>
        Notifications
      </h3>

      {/* If no notifications */}
      {notifications.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>No new notifications 🎉</p>
      ) : (
        <>
          {/* Notifications List */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                style={{
                  backgroundColor: notification.read ? '#f9f9f9' : '#E3F2FD',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ margin: 0, color: notification.read ? '#666' : '#333' }}>
                  {notification.message}
                </p>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button
              onClick={markAllAsRead}
              style={{
                backgroundColor: '#508CA4',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Mark All as Read
            </button>
            <button
              onClick={clearNotifications}
              style={{
                backgroundColor: '#ff4d4f',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Notifications;
