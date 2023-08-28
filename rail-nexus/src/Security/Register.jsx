import React, { useEffect, useState } from "react";
import httpClient from "../Services/User.service"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useMyContext } from "../MyContext";
import { Button, Modal, NavLink } from "react-bootstrap";
import Login from "./Login";
import UserService from "../Services/User.service";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    userName: "",
    mobile: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    userName: "",
    mobile: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [userData, seUserData] = useState([]);
  const textChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };
  useEffect(() => {
    setTimeout(() => {
      setErrors({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        userName: "",
        mobile: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
    }, 5000);
  }, [errors]);
  const handleRegistration = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.address.trim() === "" ||
      formData.userName.trim() === "" ||
      formData.mobile.trim() === "" ||
      formData.gender.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      newErrors = {
        ...newErrors,
        firstName: "Please Fill All the Values",
        lastName: "Please Fill All the Values",
        address: "Please Fill All the Values",
        email: "Please Fill All the Values",
        userName: "Please Fill All the Values",
        mobile: "Please Fill All the Values",
        gender: "Please Fill All the Values",
        password: "Please Fill All the Values",
        confirmPassword: "Please Fill All the Values",
      };
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords Don't Match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform registration or validation logic here
      // For this example, we'll just log the form data
      console.log("Form submitted:", formData);
      UserService.post(formData).then((response)=>{
        console.log(response.data); 
       
        history.push("/login")
        
        toast.dark("success")}
        
        
        ).catch((error)=>{console.log(error); toast.error("something went wrong")})
   
    }
  };
  const { show, setShow, handleClose, handleShow } = useMyContext();
  return (
    <div className="container d-flex justify-content-center align-items-center ">
       
      <div className="col-lg-6 col-md-8 col-sm-10">
        <h2 className="mb-4">Registration Form</h2>

        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="First Name"
            
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Last Name"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Address"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Email"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Username"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Mobile"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <select
            name="gender"
            value={formData.gender}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Select Gender"
          >
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={textChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            placeholder="Password"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={textChange}
            className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
            placeholder="Confirm Password"
          />
          {errors.firstName && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>
        

        <div className='mb-3'>
        Already have an account?  {/*  <Link to='/login'>Login here</Link> */}
               {/* <Button></Button> */}
               <Link  onClick={()=>{setShow(true)}} >Login Here</Link>
              </div>

        <button
          type="submit"
          onClick={handleRegistration}
          className="btn btn-primary"
        >
          Register
        </button>
        
        
        
      </div>
    </div>
  );
}

export default Register;
