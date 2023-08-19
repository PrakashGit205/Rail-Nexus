import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import httpClient from "../Services/User.service";
import UserService from "../Services/User.service";
import { FloatingLabel, Form } from "react-bootstrap";
const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const onTextChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        let newErrors = {};

        if (formData.email.trim() === "") {
            newErrors.email = "email is required";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Password is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            UserService.post().then();
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>

                            <div className="form-group">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com"  id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={onTextChange}
                                     />
                                </FloatingLabel>
                                

                                {/* <label htmlFor="email">email</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.email && "is-invalid"}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={onTextChange}
                                    placeholder="email"
                                /> */}
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>
                            <br />
                            <div className="form-group">
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password"   id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={onTextChange}/>
                                </FloatingLabel>
                                {/* <label htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    className={`form-control ${errors.password && "is-invalid"}`}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={onTextChange}
                                /> */}
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            <br />
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                onClick={onSubmit}
                            >
                                Login
                            </button>
                            <br />
                            <label htmlFor="New User?">New User?</label>
                            <br />
                            <button
                                type="submit"
                                className="btn btn-secondary btn-block"
                                onClick={() => history.push("/register")}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
