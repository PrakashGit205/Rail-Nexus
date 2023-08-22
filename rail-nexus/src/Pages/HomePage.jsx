import React from 'react';

import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import TrainReservationForm from './Stations/AllStations';
import SeatReservationForm from './Reservation/BookSeats';
import DemoTrainReservationForm from './Stations/DemoStaions';
function HomePage() {

    // const navigate=useNavigate
    const history = useHistory();
    debugger;
    return (<>
    
       <DemoTrainReservationForm></DemoTrainReservationForm>
    </>);
}


export default HomePage;