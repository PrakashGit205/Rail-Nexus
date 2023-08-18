import React from 'react';

import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Trains from '../AdminFlow/Trains/AllTrains';
import Stations from './Stations/AllStations';
import Sidebar from '../AdminFlow/Components/Sidebar';
import App from '../AdminFlow';
import Header from './Header';
import Login from '../Security/Login';
import Register from '../Security/Register';
import TrainReservationForm from './Stations/AllStations';
function HomePage() {

    // const navigate=useNavigate
    const history = useHistory();
    debugger;
    return (<>
    
       <TrainReservationForm></TrainReservationForm>
    </>);
}


export default HomePage;