
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';

function SeatReservationForm() {
    const location = useLocation();
    const seat = location.state?.seat || {};
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        gender: '',
        birthPreference: '',
        disability: false,
        trainNo: '',
        seat: '',
    });

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

        if (!formData.trainNo.trim()) {
            newErrors.trainNo = 'Train number is required';
        }

        if (!formData.seat.trim()) {
            newErrors.seat = 'Seat information is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Submit the form or perform any logic here
            console.log('Form submitted:', formData);
        }
    };

    const handleChange = (event) => {
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
                {/* Sidebar */}
                <Col lg={3} className="bg-light p-3">
                    <Card  className="h-100">
                        <Card.Body>
                            <Card.Title>Selected Details</Card.Title>
                            <Card.Text>
                                <strong>Train Number:</strong> {formData.trainNo}
                                <br />
                                <strong>Seat Type:</strong> {formData.seat}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            <h2>Seat Reservation Form</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="number">
                                    <Form.Label>Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        isInvalid={!!errors.number}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.number}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="gender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        isInvalid={!!errors.gender}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.gender}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="birthPreference">
                                    <Form.Label>Birth Preference</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="birthPreference"
                                        value={formData.birthPreference}
                                        onChange={handleChange}
                                        isInvalid={!!errors.birthPreference}
                                    >
                                        <option value="">Select Birth Preference</option>
                                        <option value="upper">Upper</option>
                                        <option value="middle">Middle</option>
                                        <option value="lower">Lower</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.birthPreference}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="disability">
                                    <Form.Check
                                        type="checkbox"
                                        label="Disability"
                                        name="disability"
                                        checked={formData.disability}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="trainNo">
                                    <Form.Label>Train Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="trainNo"
                                        value={formData.trainNo}
                                        onChange={handleChange}
                                        isInvalid={!!errors.trainNo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.trainNo}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="seat">
                                    <Form.Label>Seat Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="seat"
                                        value={formData.seat}
                                        onChange={handleChange}
                                        isInvalid={!!errors.seat}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.seat}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit">Submit</Button>
                            </Form>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SeatReservationForm;
