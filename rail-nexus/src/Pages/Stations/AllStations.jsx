import React, { useEffect, useState } from 'react';
import StationService from '../../Services/Station.service';
import "./effects.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const TrainReservationForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        arrivalStation: '',
        departureStation: '',
        date: '',
        seatType: '',
    });
    const [stations,setStaions] = useState([]);

    const [fadeIn, setFadeIn] = useState(false);
    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const onSubmit = (event) => {
        event.preventDefault();
    
        alert('Reservation submitted successfully!');
    };
    useEffect(() => {
        // Set the fade-in effect when the component mounts
        setFadeIn(true);
        return () => {
          // Set the fade-out effect when navigating away
          setFadeIn(false);
        };
      }, []);
    const LoadStation = () => {
        StationService
            .getAll()
            .then((response) => {
                console.log('Printing employees data', response.data);
                setStaions(response.data);
               
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    useState(() => {
        LoadStation();
    }, [])

    return (
        <div
      className={`container mt-5${fadeIn ? ' fade-in' : ' fade-out'}`}
    >
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4>Train Reservation</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="arrivalStation">Arrival Station</label>
                                    <select
                                        className="form-control"
                                        id="arrivalStation"
                                        name="arrivalStation"
                                        value={formData.arrivalStation}
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option >From</option>
                                        {stations.map((station) => (
                                            <option value={station.code}>
                                                {station.name} ({station.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="departureStation">Departure Station</label>
                                    <select
                                        className="form-control"
                                        id="departureStation"
                                        name="departureStation"
                                        value={formData.departureStation}
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option>To</option>
                                        {stations.map((station) => (
                                            <option value={station.code}>
                                                {station.name} ({station.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="seatType">Seat Type</label>
                                    <select
                                        className="form-control"
                                        id="seatType"
                                        name="seatType"
                                        value={formData.seatType}
                                        onChange={onInputChange}
                                        required
                                    >
                                        {/* Options */}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={()=>{history.push("/trains")}}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TrainReservationForm;
