import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoadSeats(props) {
    const history = useHistory();
    const CallPassenger = () => {
        history.push("/passenger-details");
}


    var count = 0;
    var count2 = 0;
    return (<div className="container-xxl py-5" style={{ display: props.seatDisplay }}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">These Are the Available Seats In Narmada Express</h1>
                    <p className="mb-5">{props.trnNo} Travels From Anuppur to Indore!!! It Travels total 456KM</p>
                    <div className="d-flex align-items-center">
                        <center>
                            <i className="fa fa-smile-beam fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        </center>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-4 align-items-center">
                        <div className="col-sm-6">
                            {
                                props.seats.map((seat) => {
                                    if (count == 2) {
                                        return;
                                    }
                                    count++;
                                    return (
                                        <div className="bg-secondary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                                            <h3 className="text-white mb-0">{seat.SeatType}</h3>
                                            <h2 className="text-white mb-2" data-toggle="counter-up">{seat.Seat}</h2>
                                            <button className="btn btn-light py-1 px-2" onClick={CallPassenger}>Book Now</button>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className="col-sm-6">
                            {
                                props.seats.map((seat) => {
                                    count2++;
                                    if (count2 <= 2) {
                                        return;
                                    }else
                                    return (
                                        <div className="bg-success p-4 mb-4 wow fadeIn" data-wow-delay="0.7s">
                                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                                            <h3 className="text-white mb-0">{seat.SeatType}</h3>
                                            <h2 className="text-white mb-2" data-toggle="counter-up">{seat.Seat}</h2>
                                            <button className="btn btn-light py-1 px-2" onClick={CallPassenger}>Book Now</button>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LoadSeats;