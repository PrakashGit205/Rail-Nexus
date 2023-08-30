import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Header from './Header'; // Assume you have a Header component

const About = () => {
  return (
    <div>
      {/* <Header /> You need to have a Header component */}
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2>About Us</h2>
            <p>
              Welcome to our Real-Time Train Reservation System, where journeying to your dream destinations becomes an experience of seamless convenience and efficiency. At the heart of our service lies a commitment to redefine your travel experience, making it as enjoyable as the destination itself.
            </p>
            <p>
              Our platform empowers travelers with the ability to instantly search for available trains based on their preferred dates, destinations, and other relevant criteria. Powered by the robust technologies of Spring Boot and JPA Repository, we bring you a real-time solution that streamlines the booking process, ensuring you spend less time planning and more time savoring the excitement of your upcoming journey.
            </p>
            <p>
              Whether you're an avid explorer or a regular commuter, our goal is to provide you with a user-friendly, efficient, and reliable service that caters to your unique travel needs. As we continue to innovate and enhance our platform, we invite you to embark on this journey with us and be a part of the future of train travel.
            </p>
            <p>
              Thank you for choosing us to be your travel companion. We're excited to have you on board!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
