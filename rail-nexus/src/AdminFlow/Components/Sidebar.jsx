// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import "../App.css"
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState({
    dashboard: "active",
    trains: "",
    stations: "",
    seats: "",
    runningTrains: "",
    passengers: "",
    allUsers: ""
  });

  const history = useHistory();

  return (
    <nav id="sidebar" style={{ position: 'sticky', position: '-webkit-sticky' }}>
      <div className="sidebar-header" style={{ position: 'sticky', position: '-webkit-sticky' }}>
        <h3>Welcome Prakash</h3>
      </div>
      <ul className="list-unstyled components">
        <li className={active.dashboard} onClick={() => setActive({
          dashboard: "active",
          trains: "",
          stations: "",
          seats: "",
          runningTrains: "",
          passengers: "",
          allUsers: ""
        })}>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li className={active.trains} onClick={() => setActive({
          dashboard: "",
          trains: "active",
          stations: "",
          seats: "",
          runningTrains: "",
          passengers: "",
          allUsers: ""
        })}>
          <Link to="/admin/trains">Trains</Link>
        </li>
        <li className={active.stations} onClick={() => setActive({
          dashboard: "",
          trains: "",
          stations: "active",
          seats: "",
          runningTrains: "",
          passengers: "",
          allUsers: ""
        })}>
          <Link to="/admin/stations">Stations</Link>
        </li>
        {/* <li className={active.seats} onClick={() => setActive({
          dashboard: "",
          trains: "",
          stations: "",
          seats: "active",
          runningTrains: "",
          passengers: "",
          allUsers: ""
        })}>
          <Link to="/admin/seats">Seats</Link>
        </li> */}
        <li className={active.runningTrains} onClick={() => setActive({
          dashboard: "",
          trains: "",
          stations: "",
          seats: "",
          runningTrains: "active",
          passengers: "",
          allUsers: ""
        })}>
          <Link to="/admin/running-trains">Trains Schedule</Link>
        </li>
        <li className={active.passengers} onClick={() => setActive({
          dashboard: "",
          trains: "",
          stations: "",
          seats: "",
          runningTrains: "",
          passengers: "active",
          allUsers: ""
        })}>
          <Link to="/admin/passengers">Passengers</Link>
        </li>
        <li className={active.allUsers} onClick={() => setActive({
          dashboard: "",
          trains: "",
          stations: "",
          seats: "",
          runningTrains: "",
          passengers: "",
          allUsers: "active"
        })}>
          <Link to="/admin/users"> Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
