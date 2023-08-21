import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../Pages/HomePage";
import Trains from "../AdminFlow/Trains/AllTrains";
import Stations from "../AdminFlow/Pages/Stations";
import RunningTrains from "../AdminFlow/Trains/RunningTrains";
import Login from "./Login";
import Register from "./Register"
import Header from "../Pages/Header";
import FilteredTrain from "../Pages/Trains/FilteredTrain";
import App from "../Pages/Trains/pagedemo";
import Admin from "../AdminFlow";
import FilterSidebar from "../Pages/Trains/pagedemo";
import MyContext, { useMyContext } from "../MyContext";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Profile from '../UserFlow/Profile';
import About from '../Pages/Extras/About'
import COntactUs from '../Pages/Extras/Contact-us'
// import second from '../../'
function Controller() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
<MyContext.Provider value={{show,setShow,handleClose,handleShow,isLoggedIn,setIsLoggedIn}}>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/register" component={Register} />  
        <Route exact path="/running-trains" component={FilterSidebar} />
        <Route exact path="/stations" component={Stations} />
        <Route exact path ="/admin" component={Admin}/>
        <Route exact path ="/about-us" component={About}/>
        <Route exact path ="/contact-us" component={COntactUs}/>
        <ProtectedRoute exact path = "/profile" component={Profile}/>
        {/* <Route path="/seats" component={Seats} /> */}
        {/* <Route exact path="/running-trains" component={RunningTrains} /> */}
      </Switch>
      </MyContext.Provider>
    </>
  );
}

export default Controller;
