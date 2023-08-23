// src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import "./App.css"
import Trains from './Trains/AllTrains';
import Stations from './Pages/Stations';
import RunningTrains from './Trains/RunningTrains';
import Dashboard from './Pages/Dashboard';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProtectedRoute from '../Security/ProtectedRoute';
import AdminProtectedRoute from '../Security/AdminProtectedRoutes';


const Seats = () => <h1>Seats Content</h1>;

function Admin() {
console.log("in admin ")

  return (
  
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Switch>
          <AdminProtectedRoute exact path="/admin/stations" component={Stations} />
          <AdminProtectedRoute exact path="/admin/trains" component={Trains} />
          <AdminProtectedRoute exact path="/admin/seats" component={Seats} />
          <AdminProtectedRoute exact path="/admin/running-trains" component={RunningTrains} />
          <AdminProtectedRoute exact path="/admin" component={Dashboard} />
          {/* <Route exact path="" component={Dashboard} /> */}
          </Switch>
        </div>
      </div>
    
  );
}

export default Admin;
