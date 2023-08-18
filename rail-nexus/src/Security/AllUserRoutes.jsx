import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../Pages/HomePage";
import Trains from "../AdminFlow/Trains/AllTrains";
import Stations from "../AdminFlow/Pages/Stations";
import RunningTrains from "../AdminFlow/Trains/RunningTrains";
import Login from "./Login";
import Register from "./Register"
import Header from "../Pages/Header";
function Controller() {
  return (
    <>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/register" component={Register} />  
        <Route exact path="/trains" component={Trains} />
        <Route exact path="/stations" component={Stations} />
        {/* <Route path="/seats" component={Seats} /> */}
        <Route exact path="/running-trains" component={RunningTrains} />
      </Switch>
    </>
  );
}

export default Controller;
