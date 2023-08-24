import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Card } from 'react-bootstrap';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
function SeatReservationForm() {
    const location = useLocation();
    const seat = location.state?.seat || {};
    const train = location.state?.train || {};
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        gender: '',
        seatType: '',
        // disability: false,
        // trainNo: '',
        // seat: '',
    });
    useEffect(() => {

        console.log(seat)
        console.log(train);
    }, [])

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.number.trim()) {
            newErrors.number = 'Number is required';
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
        }

        if (!formData.birthPreference) {
            newErrors.birthPreference = 'Birth preference is required';
        }

        // if (!formData.trainNo.trim()) {
        // newErrors.trainNo = 'Train number is required';


        // if (!formData.seat.trim()) {
        //     newErrors.seat = 'Seat information is required';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Submit the form or perform any logic here
            console.log('Form submitted:', formData);
        }
    };

    const onTextChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };
    const [passengers, setPassengers] = useState([
        {
            name: '',
            number: '',
            gender: '',
            seatType: '',
            // disability: false
        }
    ]);

    const handlePassengerChange = (index, field, value) => {
        const updatedPassengers = [...passengers];
        updatedPassengers[index][field] = value;
        setPassengers(updatedPassengers);
    };

    const addPassenger = () => {
        setPassengers([
            ...passengers,
            {
                name: '',
                number: '',
                gender: '',
                seatType: '',
                // disability: false
            }
        ]);
    };

    const removePassenger = (index) => {
        const updatedPassengers = [...passengers];
        updatedPassengers.splice(index, 1);
        setPassengers(updatedPassengers);
    };
    return (
        <div className="container-fluid">
            <Row>
                {/* Sidebar */}
                {/* <Col lg={3} className="bg-light p-3"> */}
                {/* <MySidebar></MySidebar> */}
                {/* <Card  className="h-100">
                        <Card.Body>
                            <Card.Title>Selected Details</Card.Title>
                            <Card.Text>
                                <strong>You are Travelling By  {train.trainName} from {train.originStatioin} to {train.departStation} at {seat.destinationTime}</strong> 
                                <br />
                                <br />
                                <strong> In {seat.classType} Class Type </strong> 

                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                {/* </Col> */}
                <Col lg={9}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            {train != null && seat != null ? (
                                <Card className="mb-4 p-3">
                                    <Card.Body className="text-center">
                                        <h3 className="mb-3">
                                            You are Travelling By{' '}
                                            <span className="text-primary">
                                                {train.trainName} ({train.trainNo})
                                            </span>{' '}
                                            from{' '}
                                            <span className="text-success">
                                                {train.originStatioin} to {train.departStation}
                                            </span>{' '}
                                            at{' '}
                                            <span className="text-info">{seat.destinationTime}</span>
                                        </h3>
                                    </Card.Body>
                                </Card>
                            ) : null}
                            <Form onSubmit={onSubmit}>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.name}
                                        autoComplete="given-name"
                                    />
                                    <label htmlFor="name">Name</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Floating>

                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="number"
                                        type="text"
                                        name="number"
                                        value={formData.number}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.number}
                                    />
                                    <label htmlFor="number">Number</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.number}
                                    </Form.Control.Feedback>
                                </Form.Floating>

                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="gender"
                                        as="select"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.gender}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                    <label htmlFor="gender">Gender</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.gender}
                                    </Form.Control.Feedback>
                                </Form.Floating>

                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="seatType"
                                        as="select"
                                        name="seatType"
                                        value={formData.seatType}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.seatType}
                                    >
                                        <option value="">Select Birth Preference</option>
                                        <option value="UPPER_BERTH">Upper Birth</option>
                                        <option value="MIDDLE_BIRTH">Middle Birth</option>
                                        <option value="LOWER_BERTH">Lower  Birth</option>

                                        <option value="WINDOW_BERTH">Window  Birth</option>
                                        <option value="LOWER_BERTH">Senior Citizen</option>
                                        <option value="DISABLE">Disable Birth</option>
                                        
                                    </Form.Control>
                                    <label htmlFor="seatType">Birth Preference</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.seatType}
                                    </Form.Control.Feedback>
                                </Form.Floating>

                                {/* <Form.Group controlId="disability" className="mb-3"> */}
                                    {/* <Form.Check */}
                                        {/* type="checkbox" */}
                                        {/* // label="Disability" */}
                                        {/* // name="disability" */}
                                        {/* // checked={formData.disability} */}
                                        {/* onChange={onTextChange} */}
                                    {/* /> */}
                                {/* </Form.Group> */}

                                {/* <Form.Floating className="mb-3">
                                    <Form.Control
                                        // id="trainNo"
                                        type="text"
                                        name="trainNo"
                                        value={formData.trainNo}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.trainNo}
                                    />
                                    <label htmlFor="trainNo">Train Number</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.trainNo}
                                    </Form.Control.Feedback>
                                </Form.Floating>

                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="seat"
                                        type="text"
                                        name="seat"
                                        value={formData.seat}
                                        onChange={onTextChange}
                                        isInvalid={!!errors.seat}
                                    />
                                    <label htmlFor="seat">Seat Information</label>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.seat}
                                    </Form.Control.Feedback>
                                </Form.Floating> */}

                                {/* <Button  type="submit">Submit</Button>
                                 */}
                                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                                    Next
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SeatReservationForm;
