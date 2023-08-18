// src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import "./App.css"
import Trains from './Trains/AllTrains';
import Stations from './Pages/Stations';
import RunningTrains from './Trains/RunningTrains';
import Dashboard from './Pages/Dashboard';


const Seats = () => <h1>Seats Content</h1>;

function Admin() {


  return (
  
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/trains" component={Trains} />
          <Route path="/stations" component={Stations} />
          <Route path="/seats" component={Seats} />
          <Route path="/running-trains" component={RunningTrains} />
        </div>
      </div>
    
  );
}

export default Admin;
