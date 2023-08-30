import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import modal components
import UserService from '../../Services/User.service';

function AllUsersPage({ history }) {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [role,setRole] = useState('');
  useEffect(() => {
    UserService.getAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users", error);
      });
  }, []);

  const editUser = (id) => {
    setSelectedUserId(id);
    setShowEditModal(true);
  };

  const deleteUser = (id) => {
    setSelectedUserId(id);
    setShowDeleteModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleEditSubmit = (selectedRole) => {
    // Implement your logic to update the user's role
    // Update the user's role using selectedUserId and selectedRole
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    // Implement your logic to delete the user
    // Use selectedUserId to delete the user
    setShowDeleteModal(false);
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

      {/* Edit User Modal */}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add form elements here to select user role */}
          {/* For example: */}
          <select value={role} onChange={()=> setRole(role)}>
               <option value="user">User</option>
               <option value="admin">Admin</option>
             </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>Cancel</Button>
          <Button variant="primary" onClick={() => handleEditSubmit(/* selected role */)}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete User Modal */}
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AllUsersPage;
