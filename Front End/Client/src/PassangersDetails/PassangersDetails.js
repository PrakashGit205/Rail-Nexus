import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function PassangersDetails(props) {
    const [passenger, setPassenger] = useState({ Name: "", Age: "", Gender: "", Mobile: "" });

    const BookNow = () => {

    }
    const textchange = (args) => {
        debugger;
        let copytrainsReqrmnt = { ...passenger }

        copytrainsReqrmnt[args.target.name] = args.target.value;
        setPassenger(copytrainsReqrmnt);
    }
    return (
        <>
            <NavBar></NavBar>
            <center>
                
            <div class="container-xxl py-5" >
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">

                                <div className="row g-5">

                                    <div className="col-12 col-sm-6">
                                        <input onChange={textchange} style={{
                                            textEmphasisColor: "transparent"
                                        }} type="text" class="form-control border-0 " placeholder="Full Name" value={passenger.Name} name="Name" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input onChange={textchange} style={{
                                            textEmphasisColor: "transparent"
                                        }} type="number" class="form-control border-0" placeholder="Age" value={passenger.Age} name="Age" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input onChange={textchange} style={{
                                            textEmphasisColor: "transparent"
                                        }} type="text" class="form-control border-0" placeholder="Gender" value={passenger.Gender} name="Gender" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input onChange={textchange} style={{
                                            textEmphasisColor: "transparent"
                                        }} type="number" class="form-control border-0" placeholder="Mobile" value={passenger.Mobile} name="Mobile" />
                                    </div>
                                    <div className="col-12" style={{ display: "flex", paddingLeft: "250px", paddingRight: "200px" }}>
                                        <button className="btn btn-primary w-100 py-3 " style={{ borderRadius: "5px" }} type="submit" >Add One More Passenger </button>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={BookNow}>Find Train</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </center>
            <Footer></Footer>


        </>



    );
}

export default PassangersDetails;