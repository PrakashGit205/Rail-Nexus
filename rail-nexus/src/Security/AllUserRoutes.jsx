import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../Pages/HomePage";

function Controller() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/trains" component={Trains} />
        <Route path="/stations" component={Stations} />
        <Route path="/seats" component={Seats} />
        <Route path="/running-trains" component={RunningTrains} />
      </Switch>
    </>
  );
}

export default Controller;
