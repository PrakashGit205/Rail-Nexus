import { useState } from "react";
import NavBar from "../NavBar/NavBar";

function TrainForm(props) {
    const [stations, setStaions] = useState([]);
    const LoadStation = () => {
        var server = new XMLHttpRequest();
        server.onreadystatechange = () => {
            debugger;
            if (server.readyState == 4 && server.status == 200) {
                setStaions(JSON.parse(server.responseText));
            }
        }
        server.open("GET", "http://127.0.0.1:9999/stations");
        server.send();
    }

    useState(() => {
        LoadStation();
    }, [])

    return (<>
        <NavBar></NavBar>
        <div class="container-xxl py-5" style={{ display: props.formDisplay }}>
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">

                            <div className="row g-3">


                                <select onChange={props.textchange} name="sStnId" className="form-select border-0" style={{ height: "55px" }}>
                                    <option >From</option>
                                    {
                                        stations.map((station) => {
                                            return <option value={station.code}>{station.name} ({station.code})</option>
                                        })
                                    }
                                </select>
                                <select onChange={props.textchange} name="endStnId" className="form-select border-0" style={{ height: "55px" }}>

                                    <option  >To</option>{
                                        stations.map((station) => {
                                            return <option value={station.code}>{station.name}({station.code})</option>
                                        })
                                    }
                                </select>
                                <div className="col-12 col-sm-6">
                                    <input onChange={props.textchange} style={{textEmphasisColor : "transparent"
                                }} type="date" class="form-control border-0" placeholder="Journey Date" value={props.journeyDate} name="journeyDate" />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit" onClick={props.LoadTrain}>Find Train</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase mb-3">Get A Ticket</h6>
                        <h1 class="mb-5">Get First Ticket Free!</h1>
                        <p class="mb-5">In the auspicious day of our Start of the Journey we are giving free ticket for First Travelling</p>
                        <div class="d-flex align-items-center">
                            <i class="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                            <div class="ps-4">
                                <h6>Call for any query!</h6>
                                <h3 class="text-primary m-0">+91 8055-971-351</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
}

export default TrainForm;