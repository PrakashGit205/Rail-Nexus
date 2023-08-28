import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Email is required');
      return;
    }
    // Validate and send OTP
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage('OTP is required');
      return;
    }
    // Validate and verify OTP
    setStep(3);
  };

  const handleSetPassword = (e) => {
    e.preventDefault();
    if (!newPassword) {
      setErrorMessage('New password is required');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    // Validate and set new password
    // Reset the state and show a success message
    setErrorMessage('');
    setStep(1);
    setEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mt-5">
            <Card.Body>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {step === 1 && (
                <div>
                  <h2 className="text-center mb-4">Enter Your Email</h2>
                  <Form onSubmit={handleSendOTP}>
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      /><br />
                    </Form.Group>
                    <Button block type="submit">
                      Send OTP
                    </Button>
                  </Form>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-center mb-4">Enter OTP</h2>
                  <Form onSubmit={handleVerifyOTP}>
                    <Form.Group controlId="otp">
                      <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      /><br />
                    </Form.Group>
                    <Button block type="submit">
                      Verify OTP
                    </Button>
                  </Form>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-center mb-4">Set New Password</h2>
                  <Form onSubmit={handleSetPassword}>
                    <Form.Group controlId="password">
                      <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    <br /></Form.Group>
                    <Form.Group controlId="confirmPassword">
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Button block type="submit">
                      Save Password
                    </Button>
                  </Form>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;
