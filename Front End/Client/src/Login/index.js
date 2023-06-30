import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import App from "../App";

function Controllor() {
    return (

        <Router>
            <Switch>
                {/* <Route exact path="/" render={() => { return <h1>hi</h1> }}></Route> */}
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/" component={App}></Route>
            </Switch>
           
        </Router>
    );
}

export default Controllor;