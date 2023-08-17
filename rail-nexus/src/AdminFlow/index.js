
import Login from "../Security/Login";
import HomePage from "../Pages/HomePage";
import Register from "../Security/Register";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function Controller() {
  return (
    <>
       
            <Switch>
                {/* <Route exact path="/" render={() => { return <h1>hi</h1> }}></Route> */}
                <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/register" component={Register}></Route>
                   
            </Switch>
           
          
    </>
  );
}

export default Controller;
