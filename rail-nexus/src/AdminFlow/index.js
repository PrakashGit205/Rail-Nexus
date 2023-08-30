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
import TrainStatusPage from './Pages/Seats';
import EditStationPage from './Pages/EditStation';
import EditTrainPage from './Pages/EditTran';
import AllPassengers from './Passengers/AllPassenger';
import AllUsersPage from './Users/Users';
import EditUserPage from './Users/EditUser';




function Admin() {
console.log("in admin ")

  return (
  
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Switch>
          <AdminProtectedRoute exact path="/admin/stations" component={Stations} />
          <AdminProtectedRoute exact path="/admin/trains" component={Trains} />
          {/* <AdminProtectedRoute exact path="/admin/seats" component={TrainStatusPage} /> */}
          <AdminProtectedRoute exact path="/admin/running-trains" component={RunningTrains} />
          <AdminProtectedRoute exact path="/admin" component={Dashboard} />
          <AdminProtectedRoute exact path="/admin/edit-station/:id" component={EditStationPage} />
          <AdminProtectedRoute exact path="/admin/edit-train/:id" component={EditTrainPage} />
          <AdminProtectedRoute exact path="/admin/passengers" component={AllPassengers} />
          <AdminProtectedRoute exact path="/admin/users" component={AllUsersPage} />
          <AdminProtectedRoute exact path="/admin/edit-user/:id" component={EditUserPage} />
          </Switch>
        </div>
      </div>
    
  );
}

export default Admin;
