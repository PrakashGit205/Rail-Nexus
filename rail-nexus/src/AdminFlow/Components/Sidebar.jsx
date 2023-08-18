// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import "../App.css"

const Sidebar = () => {
const [active,setActive] = useState({dashboard : "active",trains:"",stations:"",seats:"",RunningTrains:""});
useEffect(() => {
  console.log(active)

}, [])

  return (
    <nav id="sidebar" style={{ position:'sticky',position:'-webkit-sticky' }}>
      <div className="sidebar-header" style={{ position:'sticky',position:'-webkit-sticky' }}>
        <h3>Welcome Admin Name</h3>
      </div>
      <ul className="list-unstyled components">
        <li className= {active.dashboard}onClick={()=>{ setActive({dashboard : "active",trains:"",stations:"",seats:""})}}>
         
          <Link to="/dashboard">Dashboard</Link>
         
        </li>
        <li className= {active.trains} onClick={()=>{setActive({dashboard : "",trains:"active",stations:"",seats:""})}}>
          <Link to="/trains">Trains</Link>
        </li>
        <li className= {active.stations}onClick={()=>{setActive({dashboard : "",trains:"",stations:"active",seats:""})}}>
          <Link to="/stations">Stations</Link>
        </li>
        <li className= {active.seats}onClick={()=>{setActive({dashboard : "",trains:"",stations:"",seats:"active"})}}>
          <Link to="/seats">Seats</Link>
        </li>
        <li className= {active.RunningTrains}onClick={()=>{setActive({dashboard : "",trains:"",stations:"",seats:"",RunningTrains:"active"})}}>
          <Link to="/running-trains">Trains Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
