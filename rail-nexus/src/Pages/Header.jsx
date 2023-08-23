import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useMyContext } from "../MyContext";
import "./Header.css"
function Header() {
    const { show, setShow, handleClose, handleShow, isLoggedIn, setIsLoggedIn } = useMyContext();
    const history = useHistory();
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    useEffect(() => {
        var isuserLoggedIn = window.sessionStorage.getItem("isLoggedIn123");
        var User = sessionStorage.getItem("User");
        if (isuserLoggedIn != null && isuserLoggedIn == 'true' && User != null) {
            setIsLoggedIn(true);
        }
    }, [])
    useEffect(() => {
        var isuserLoggedIn = window.sessionStorage.getItem("isLoggedIn123");
        var User = sessionStorage.getItem("User");
        if (isuserLoggedIn != null && isuserLoggedIn == 'true' && User != null) {
            setIsLoggedIn(true);
        }
        else
            setIsLoggedIn(false);
    }, [isLoggedIn])

    // Function to handle login
    const handleLogin = () => {
        // Perform your login logic here
        // Once logged in, update the authentication status
        setShow(true);
        // history.push("/login")
        var isuserLoggedIn = window.sessionStorage.getItem("isLoggedIn123");
        var User = sessionStorage.getItem("User");
        if (isuserLoggedIn != null && isuserLoggedIn == 'true' && User != null) {
            setIsLoggedIn(true);
        }
    };
    const LogOut = () => {
        sessionStorage.removeItem("User");
        sessionStorage.removeItem("isLoggedIn123");
        setIsLoggedIn(false);
        history.push("/")
    }
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-header"style={{borderRadius:'0px'}} >
            <div className="container-fluid">
                <a class="navbar-brand" href="/">
                    <a src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    Rail Nexus
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 hover hover-overlay">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Features
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Something else here
                                    </Link>
                                </li>
                                <li>

                                </li>
                            </ul>
                            <li>

                            </li>
                        </li>

                    </ul>
                    <div className="d-flex">
                        <ul>
                            <li>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search Train "
                                        className="me-4"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" >Search</Button>
                                </Form>

                            </li>
                        </ul>
                        {/* Conditional rendering based on authentication status */}
                        {isLoggedIn ? (
                            <>
                                <ul>
                                    <li>
                                        <button
                                            className="btn btn-outline-info"
                                            type="submit"
                                            onClick={() => history.push("/admin")}
                                        >
                                            Go to My Profile
                                        </button>
                                    </li>

                                </ul>
                                <ul>
                                    <li>
                                        <button
                                            className="btn btn-outline-danger"
                                            type="submit"
                                            onClick={() => LogOut()}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </ul>



                            </>
                        ) : (
                            <ul><li>

                                <button
                                    className="btn btn-outline-info"
                                    type="submit"
                                    onClick={() => handleLogin()}
                                >
                                    Login/Signup
                                </button>
                            </li></ul>

                        )
                        }
                    </div>
                </div>
            </div>
        </nav>


    </>);
}

export default Header;