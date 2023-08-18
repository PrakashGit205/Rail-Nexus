import React from 'react';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Trains from '../AdminFlow/Trains/AllTrains';
import Stations from './Stations/AllStations';
import Sidebar from '../AdminFlow/Components/Sidebar';
import App from '../AdminFlow';

function HomePage() {
    
    // const navigate=useNavigate
    const history = useHistory();
    debugger;
    return ( <>this is home page
    {/* <button type="button" className="btn btn-primary" onClick={()=> history.push("/Login")}>Go to Login</button>
    <button type="button" className="btn btn-primary" onClick={()=> history.push("/register")}>Go to Register</button>
    <a href="/login">click here</a>
   */}
    <App></App>
    <Stations></Stations>
    </> );
}


export default HomePage;