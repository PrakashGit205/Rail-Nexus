import React from "react";
import PassengerService from "../../Services/Passenger.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";
import axios, { Axios } from "axios";
import AuthHeader from "../../Services/auth.heder";
import BaseURL from "../../GlobalConfig";

function PaymentConfirm() {
    const history = useHistory();
    
    React.useEffect(() => {
      console.log(atob(sessionStorage.getItem('passenger')))
      const storedPassengerData = JSON.parse(atob(sessionStorage.getItem('passenger')));
      axios.post(BaseURL+"/api/passengers",storedPassengerData,{headers : AuthHeader()}).then(response=>{
        sessionStorage.setItem("passenger", btoa(JSON.stringify(response.data)))
        sessionStorage.setItem("oldPassenger", btoa(JSON.stringify(storedPassengerData)))
        console.log(response.data);
      })


      
      // PassengerService.post(storedPassengerData).then((response)=>{
      // })
      console.log("passenger data")
    //   console.log();
  }, []);
 
  
  return ( <>
<center>
    <Button onClick={()=>{ history.push("/ticket")}}>print ticket</Button>
    </center>
    </> );
}

export default PaymentConfirm;