import React from 'react';

import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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