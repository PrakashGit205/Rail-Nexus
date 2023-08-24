import React from "react";
import PassengerService from "../../Services/Passenger.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";

function PaymentConfirm() {
    const history = useHistory();
    
    React.useEffect(() => {
      console.log(atob(sessionStorage.getItem('passenger')))
      const storedPassengerData = JSON.parse(atob(sessionStorage.getItem('passenger')));
      PassengerService.post(storedPassengerData).then((response)=>{
        console.log(response.data);
        sessionStorage.setItem("passenger", btoa(JSON.stringify(response.data)))
        sessionStorage.setItem("oldPassenger", btoa(JSON.stringify(storedPassengerData)))
      })
      console.log("passenger data")
    //   console.log();
      history.push("/ticket")
    }, []);

    return ( <>

    {/* <Button onClick={()=>{}}>print ticket</Button> */}
    </> );
}

export default PaymentConfirm;