import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import UserService from "../Services/User.service";
import { CloseButton, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useMyContext } from "../MyContext";
import Alert from '@mui/material/Alert';
const Login = () => {
  // const { show, handleClose } = useMyContext();
    const {  setIsLoggedIn } = useMyContext();
  const { handleClose,show } = useMyContext();
  const location = useLocation();

  const [user, setUser] = useState({
    address: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    mobile: "",
    regDate: "",
    role: "",
    userName: "",
  });
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
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
      UserService.login(formData)
        .then((response) => {

          console.log(response.data);
          setUser(response.data);
          console.log(user);
          sessionStorage.setItem("User", JSON.stringify(response.data));
          if('user'.match(response.data.role)){
            sessionStorage.setItem("isLoggedIn123", "true");
            // history.push("/profile");
              console.log('location.state:', location.state);
  const { from } = location.state || { from: { pathname: '/' } };
  console.log('from:', from);
            
          }
          setIsLoggedIn(true);
          handleClose(false);
        })
        .catch((error) => {
          setErrors({ password: "Wrong Email or password" });
          console.log(error);
          // return (<></>)
        });
      }
    };
    
    return (
      <>
    {/* <Modal show={show} onHide={handleClose}> */}
      {/* {errors.password.length>0 ?  <Alert severity="error">This is an error alert — check it out!</Alert> : ""} */}
      <Form onSubmit={() => {history.push("/register");  handleClose();}}>
      <div className="card" >
        <CloseButton
          onClick={() => {
            handleClose();
          }}
        ></CloseButton>
        <div className="card-body ">
          <h3 className="card-title text-center">Login</h3>

          <div className="form-group">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={onTextChange}
                
              />
            </FloatingLabel>
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <br />
          <div className="form-group">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={onTextChange}
              />
            </FloatingLabel>

            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="text-danger">{errors.password}</div>
          <br />
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={onSubmit}
          >
            Login
          </button>
          <br />
          <div className='mb-3'>
                <Link to='/fogot-password'>Forgot Pasword</Link>
              </div>
          <label htmlFor="New User?">New User?</label>
          <br />
          <button
            type="submit"
            className="btn btn-secondary btn-block"
            
          >
            Register
          </button>
        </div>
      </div>
      </Form>
    </>
  );
};

export default Login;
