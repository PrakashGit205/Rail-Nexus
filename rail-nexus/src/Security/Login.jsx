import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import httpClient from "../Services/User.service";
import UserService from "../Services/User.service";
const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
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

        if (formData.username.trim() === "") {
            newErrors.username = "Username is required";
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
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username && "is-invalid"}`}
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={onTextChange}
                                    placeholder="UserName"
                                />
                                {errors.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                )}
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    className={`form-control ${errors.password && "is-invalid"}`}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={onTextChange}
                                />
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
