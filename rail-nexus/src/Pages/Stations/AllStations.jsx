import React, { useEffect, useState } from 'react';
import StationService from '../../Services/Station.service';
import "./effects.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useMyContext } from '../../MyContext';
import Login from '../../Security/Login';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
const TrainReservationForm = () => {
    const { show, setShow, handleClose, handleShow } = useMyContext();
    const history = useHistory();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        originId: '',
        sourceId: '',
        originDate: '',
        classType: '',
    });

    const [isOpen, setIsOpen] = React.useState(false)
    const [message, setMessage] = useState();
    const [stations, setStaions] = useState([]);

    const [fadeIn, setFadeIn] = useState(false);
    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        LoadStation();
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
    useEffect(() => {
        setTimeout(() => {
            setMessage("");
        }, 3000);

    }, [message]);
    // useState(() => {
    //     LoadStation();
    // }, [])
    const onSubmitFun = () => {
        console.log(formData);
        if (formData.sourceId == "" || formData.originId == "") {
            setMessage("please select destination and source station")
            return;
        }
        console.log(Date.now())
        history.push("/running-trains", { formData: formData });
    }

    return (<>
        {/* <Modal show={show} onHide={handleClose}>
            <Login></Login>
        </Modal> */}
        <div
            className={`container mt-5${fadeIn ? ' fade-in' : ' fade-out'}`}
        >
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">


                        <div className="card mb-15">
                            <div className="card-header bg-info text-white">
                                <h4>Train Reservation</h4>
                            </div>
                            <div className="card-body">

                                <div className="form-group">
                                    <label htmlFor="sourceStation">source Station</label>
                                    <select
                                        className="form-control"
                                        id="originId"
                                        name="originId"
                                        value={formData.originId}
                                        onChange={onInputChange}

                                    >
                                        <option >From</option>
                                        {stations.map((station) => (
                                            <option value={station.id}>
                                                {station.name} ({station.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="destinationStation">destination Station</label>
                                    <select
                                        className="form-control"
                                        id="sourceId"
                                        name="sourceId"
                                        value={formData.sourceId}
                                        onChange={onInputChange}

                                    >
                                        <option>To</option>
                                        {stations.map((station) => (
                                            <option value={station.id}>
                                                {station.name} ({station.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="date">Date</label> */}
                                    {/* <input
                                        type="date"
                                        className="form-control"
                                        id="originDate"
                                        name="originDate"
                                        value={formData.originDate}
                                        onChange={onInputChange}
                                        defaultValue={formattedDate}

                                    /> */
                                    }
                              
                                        <button
                                            onClick={() => {
                                                setIsOpen(true)
                                            }}
                                        >
                                            Open date 
                                        </button>
                                        <DatePicker
                                            isOpen={isOpen}
                                            onClose={() => setIsOpen(false)}
                                            defaultValue={new Date(2022, 8, 8)}
                                            minDate={new Date(2022, 10, 10)}
                                            maxDate={new Date(2023, 0, 10)}
                                            headerFormat='DD, MM dd'
                                        />
                                   


                                </div>
                                <div className="form-group">
                                    <label htmlFor="seatType">Seat Type</label>
                                    <select
                                        className="form-control"
                                        id="classType"
                                        name="classType"
                                        value={formData.classType}
                                        onChange={onInputChange}

                                    >

                                        <option value="GENERAl">
                                            GENERAl
                                        </option>
                                        <option value="FIRST_CLASS">
                                            FIRST-CLASS
                                        </option><option value="SLEEPER_CLASS">
                                            SLEEPER-CLASS
                                        </option><option value="SECOND_CLASS">
                                            SECOND-CLASS
                                        </option>

                                    </select>
                                </div>
                                <label style={{ color: 'red' }} htmlFor="error">{message}</label>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={onSubmitFun}>
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default TrainReservationForm;
