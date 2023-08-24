import React, { useState } from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
// import PassengerService from '../../Services/Passenger.service';

function SeatReservationFormStyled() {
  const location = useLocation();
  const history = useHistory();
    // const seat = location.state?.seat || {};
    // const train = location.state?.train || {};
    const user = JSON.parse(sessionStorage.getItem("User"));
    const storedSeatEncoded = sessionStorage.getItem("seat");
    const storedTrainEncoded = sessionStorage.getItem("train");
    const storedStationEncoded = sessionStorage.getItem("station");
    
    const seat = JSON.parse(atob(storedSeatEncoded));
    const train = JSON.parse(atob(storedTrainEncoded));
    const station = JSON.parse(atob(storedStationEncoded));
    const [formData, setFormData] = useState({
        name: user.firstName + " " + user.lastName,
        mobile: user.mobile,
        gender: '',
        seatType: '',
        age : "",
        disability: false,
        userId : user.id,
        sourceStationId : station.sourceId,
        destinationStationId : station.originId,
        trainId : train.id,
        classType : seat.classType,
        fair : seat.fair,
        originDate :  train.originDate,
        sourceTime : train.originTime,
        destinationTime : train.departTime

    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'mobile is required';
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
        }

        if (!formData.age) {
            newErrors.age = 'age is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(train);
            console.log(seat)
            console.log(station)
            sessionStorage.setItem("passenger",btoa(JSON.stringify(formData)));
            history.push('/payment');
            // PassengerService.post(formData).then((response)=>{
                // console.log(response)}).catch((error)=>{console.log(error)});

            console.log('Form submitted:', formData);
            // You can add logic to submit the form data to your server here
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

    return (
        <div className="container-fluid">
            <Row>
                <Col lg={9}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            {train != null && seat != null ? (
                                <Card className="mb-4 p-3">
                                    <Card.Header className="text-center">
                                        <h5 className="mb-3">
                                           {formData.name} you are Travelling By{' '}
                                            <span className="text-primary">
                                                {train.trainName} ({train.trainNo})
                                            </span>{' '}
                                            from{' '}
                                            <span className="text-success">
                                                {train.originStatioin} to {train.departStation}
                                            </span>{' '}
                                            at{' '}
                                            <span className="text-info">{seat.destinationTime}</span>
                                        </h5>
                                    </Card.Header>
                                  <Card.Body className="text-center"><h4>  Passanger Details</h4></Card.Body>
                                    
                                </Card>
                            ) : null}
                            <Form onSubmit={onSubmit}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    value={formData.name}
                                    onChange={onTextChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    variant="standard"
                                    className="mb-3"
                                    autoComplete="given-name"
                                />
                                <TextField
                                    required
                                    id="mobile"
                                    name="mobile"
                                    label="mobile"
                                    fullWidth
                                    value={formData.mobile}
                                    onChange={onTextChange}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                    variant="standard"
                                    className="mb-3"
                                    autoComplete="given-mobile"
                                />
                                 <TextField
                                    required
                                    id="age"
                                    name="age"
                                    label="age"
                                    fullWidth
                                    value={formData.age}
                                    onChange={onTextChange}
                                    error={!!errors.age}
                                    helperText={errors.age}
                                    variant="standard"
                                    className="mb-3"
                                    autoComplete="given-age"
                                />
                                <TextField
                                    required
                                    id="gender"
                                    name="gender"
                                    label="Gender"
                                    select
                                    fullWidth
                                    value={formData.gender}
                                    onChange={onTextChange}
                                    error={!!errors.gender}
                                    helperText={errors.gender}
                                    variant="standard"
                                    className="mb-3"
                                    autoComplete="given-name"
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </TextField>
                                <TextField
                                    
                                    id="seatType"
                                    name="seatType"
                                    label="Birth preference"
                                    select
                                    fullWidth
                                    value={formData.seatType}
                                    onChange={onTextChange}
                                    error={!!errors.seatType}
                                    helperText={errors.seatType}
                                    variant="standard"
                                    className="mb-3"
                                >
                                    <MenuItem value="UPPER_BERTH">Upper Berth</MenuItem>
                                    <MenuItem value="MIDDLE_BERTH">Middle Berth</MenuItem>
                                    <MenuItem value="LOWER_BERTH">Lower Berth</MenuItem>
                                    <MenuItem value="WINDOW_BERTH">Window  Birth</MenuItem>
                                        <MenuItem value="LOWER_BERTH">Senior Citizen</MenuItem>
                                        <MenuItem value="DISABLE">Disable Birth</MenuItem>
                                    {/* Add more options */}
                                </TextField>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="secondary"
                                            name="disability"
                                            checked={formData.disability}
                                            onChange={onTextChange}
                                        />
                                    }
                                    label="Disability"
                                    className="mb-3"
                                />
                                <br />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    endIcon={<SendIcon />}
                                >
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

export default SeatReservationFormStyled;

