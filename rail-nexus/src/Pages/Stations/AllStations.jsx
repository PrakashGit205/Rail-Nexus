import StationService from "../../Services/Station.service";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
function AllStations() {
    var [trainsReqrmnt, setTrainsReqrmnt] = useState({
        sStnId: "",
        endStnId: "",
    });
    const [stations, setStaions] = useState([]);
    const LoadStation = () => {
        StationService.getAll()
            .then((response) => {
                console.log("Printing stations data", response.data);
                setStaions(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };
    const textchange = (args) => {
        debugger;
        let copytrainsReqrmnt = { ...trainsReqrmnt };

        copytrainsReqrmnt[args.target.name] = args.target.value;
        setTrainsReqrmnt(copytrainsReqrmnt);
    };

    useState(() => {
        LoadStation();
    }, []);
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        config: { duration: 500 }, 
        
    });
    return (
        <> <animated.div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", ...fade }}>

           
                <h1 onClick={toggleVisibility}>Hey i am here</h1>
           

        </animated.div>

        </>
    );
}

export default AllStations;
