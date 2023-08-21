import { useState } from "react";
import Login from "./Login";
import {Route} from 'react-router-dom';

function ProtectedRoute(props)
{
    var isLoggedIn = false;

    var isuserLoggedIn = window.sessionStorage.getItem("isLoggedIn123");
    var User = sessionStorage.getItem("User");
    console.log(JSON.parse(User))
    // const [data, setData] = useState()
    if(isuserLoggedIn!=null && isuserLoggedIn=='true'&& User != null)
    {
      isLoggedIn = true;
    }
    else
    {
       isLoggedIn = false;
    }
 

    if(isLoggedIn)
    {
        return <Route exact path={props.path} 
                      component={props.component}/>
    }
    else
    {
        return <Login></Login>   
    }
}

export default ProtectedRoute;