import React, { useState, useEffect } from 'react';
import UserService from '../../Services/User.service';
// Import your user service or API functions

function AllUsersPage({ history }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data using your service or API
    // Update the following code according to your actual implementation
    UserService.getAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users", error);
      });
  }, []);

  const editUser = (id) => {
    history.push("/admin/edit-user/" + id);
  };

  const deleteUser = (id) => {
    // Implement delete user logic here
  };

  const renderUserCards = () => {
    return users.map((user, index) => (
      <div key={index} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
            <p className="card-text">Email: {user.email}</p>
            {/* Add more user-specific information here */}
            <button className="btn btn-secondary" onClick={() => editUser(user.id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
            {/* Add more action buttons as needed */}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        {renderUserCards()}
      </div>
    </div>
  );
}

export default AllUsersPage;
