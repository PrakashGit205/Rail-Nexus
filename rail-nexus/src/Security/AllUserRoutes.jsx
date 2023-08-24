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
import { Modal } from "react-bootstrap";
import BookSeat from '../Pages/Reservation/BookSeats'
import Footer from '../Pages/Extras/Footer'
import AdminProtectedRoute from "./AdminProtectedRoutes";
import SeatReservationFormStyled from "../Pages/Reservation/PassengerDetail";
import PaymentForm from "../Pages/Reservation/Payment";
import Ticket from "../Pages/Reservation/Ticket/TIcket";
// import second from '../../'
function Controller() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MyContext.Provider value={{ show, setShow, handleClose, handleShow, isLoggedIn, setIsLoggedIn }}>
        <Header></Header>
        <Modal show={show} onHide={handleClose}>
          <Login></Login>
        </Modal>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/running-trains" component={FilterSidebar} />
          {/* <Route exact path="/stations" component={Stations} /> */}
          <AdminProtectedRoute exact path="/admin" component={Admin} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={COntactUs} />
          <ProtectedRoute exact path="/book-seat" component={SeatReservationFormStyled} />
          {/* <Route exact path="/admin/trains" component={Trains} /> */}
          {/* <Route exact path="/admin/stations" component={Stations} /> */}
          {/* <Route exact path="/admin/seats" component={Seats} /> */}
          {/* <Route exact path="/admin/running-trains" component={RunningTrains} /> */}
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/payment" component={PaymentForm} />
          <ProtectedRoute exact path="/ticket" component={Ticket} />
          {/* <Route path="/seats" component={Seats} /> */}
          {/* <Route exact path="/running-trains" component={RunningTrains} /> */}
          <AdminProtectedRoute exact path="/admin/stations" component={Admin} />
          <AdminProtectedRoute exact path="/admin/trains" component={Admin} />
          <AdminProtectedRoute exact path="/admin/seats" component={Admin} />
          <AdminProtectedRoute exact path="/admin/running-trains" component={Admin} />
        </Switch>
        <Footer></Footer>
      </MyContext.Provider>
    </>
  );
}

export default Controller;
