import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import stationService from "../Services/Station.Service";
function TrainForm(props) {
    const [stations, setStaions] = useState([]);
    // const LoadStation = () => {
    //     var server = new XMLHttpRequest();
    //     server.onreadystatechange = () => {
    //         debugger;
    //         if (server.readyState == 4 && server.status == 200) {
    //             console.log(server.responseText)
    //             debugger;
    //             setStaions(JSON.parse(server.responseText));
    //         }
    //     }
    //     server.open("GET", "http://localhost:7070/station");
    //     server.send();
    // }
    const LoadStation = () => {
        stationService
          .getAll()
          .then((response) => {
            console.log('Printing employees data', response.data);
            setStaions(response.data);
            // setTempemp(response.data);
            //  console.warn(response.data);
          })
          .catch((error) => {
            console.log('Something went wrong', error);
          });
      };

    useState(() => {
        LoadStation();
    }, [])

    return (<>
        <NavBar></NavBar>
        <div class="container-xxl py-5" style={{ display: props.formDisplay }}>
            <div class="container py-5">
                <div class="row g-10 align-items-right">
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
                    
                </div>
            </div>
        </div>
        </>);
}

export default TrainForm;