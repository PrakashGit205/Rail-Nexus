import React, { useEffect } from 'react';

import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import TrainReservationForm from './Stations/AllStations';
import SeatReservationForm from './Reservation/BookSeats';
import DemoTrainReservationForm from './Stations/DemoStaions';
import TrainService from '../Services/Train.service';
function HomePage() {
// useEffect(()=>{
//     const dataToSend = {
//         name: "Sample Name",
//         time: "2023-08-29T12:00:00", 
//         list: [1, 2, 3] 
//       };
// TrainService.post(dataToSend).then((respoonse)=>{
//     console.log(respoonse.data)
// }).catch((error)=>console.log(error))

// },[])
    // const navigate=useNavigate
    const history = useHistory();

    return (<>
    
       <DemoTrainReservationForm></DemoTrainReservationForm>
    </>);
}


export default HomePage;