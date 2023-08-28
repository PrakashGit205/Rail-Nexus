import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUser, faTable, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { faSpeedometer2, faGrid } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Home, Person, TableChart, Speed, Apps, ExitToApp } from '@mui/icons-material';

function UserSidebar() {
  const [User, setUser] = useState({})
  var tempuser;
  useEffect(()=>{
     tempuser = JSON.parse(atob( sessionStorage.getItem("User")));
    console.log(tempuser);
    setUser(tempuser);
  },[])
  return (
    <Navbar
     bg="dark" variant="dark" className="flex-column align-items-start p-3" style={{ width: 280, height: 750 }}>
      <Navbar.Brand>
        {/* <FontAwesomeIcon icon={faUser} size="2x" className="me-2" /> */}
        <span className="fs-4">Welcome {User.firstName} {User.lastName}</span>
      </Navbar.Brand>
      <hr />
      <div style={{ alignSelf: "center", marginBottom: 30 }}>
        <img src="https://github.com/mdo.png" alt="" width={60} height={60} className="rounded-circle me-2" />
        <br />
         {User.firstName}
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/profile" className="nav-link active">
            <Home className="me-2" />
            Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/bookings" className="nav-link">
            <Speed className="me-2" />
            Bookings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/history" className="nav-link">
            <TableChart className="me-2" />
            History
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link as={Link} to="#" className="nav-link">
            <Apps className="me-2" />
            
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link as={Link} to="#" className="nav-link">
            <ExitToApp className="me-2" />
            Log Out
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      {/* Any additional content you want to include */}
    </Navbar>
  );
}

export default UserSidebar;
