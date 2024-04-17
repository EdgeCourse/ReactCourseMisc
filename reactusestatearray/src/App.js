import React, { useState } from 'react';

function App() {
  //const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([{ id: '1', name: 'Bob' }]);
  const [newUser, setNewUser] = useState('');
  const [updateInfo, setUpdateInfo] = useState({ id: '', name: '' });

  const handleAddUser = () => {
    if (newUser !== '') {
      const newUserObject = {
        id: users.length + 1,
        name: newUser
      };
      setUsers([...users, newUserObject]);
      setNewUser('');
    }
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdateUser = () => {
    setUsers(users.map(user => {
      if (user.id === parseInt(updateInfo.id)) {
        return { ...user, name: updateInfo.name };
      }
      return user;
    }));
    setUpdateInfo({ id: '', name: '' });
  };

  return (
    <div>
      <h1>User Management System</h1>
      
      <div>
        <input
          type="text"
          placeholder="Add new user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="User ID"
          value={updateInfo.id}
          onChange={(e) => setUpdateInfo({ ...updateInfo, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Name"
          value={updateInfo.name}
          onChange={(e) => setUpdateInfo({ ...updateInfo, name: e.target.value })}
        />
        <button onClick={handleUpdateUser}>Update User</button>
      </div>

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} (ID: {user.id})
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;