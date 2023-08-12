import './Home.css'; 
// import {Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
    return (  <div className="home-container">
    <header className="header">
      <h1 className="display-4">Train Reservation System</h1>
    </header>
    <div className="content">
      <div className="welcome-message">
        <h2>Welcome to our Train Booking Service</h2>
        <p>
          Book your train tickets hassle-free with our easy-to-use online reservation system.
        </p>
        <btn  className="btn btn-primary btn-lg">
          Book Now
         </btn>
      </div>
    </div>
    <footer className="footer">
      <p>&copy; 2023 Train Reservation System. All rights reserved.</p>
    </footer>
  </div> );
}

export default App;