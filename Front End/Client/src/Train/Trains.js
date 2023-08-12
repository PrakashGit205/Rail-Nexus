function Trains(props) {
    const print = () => {
        console.log("hiis")
    }
    return (
        <div className="container-xxl py-5" style={{ display: props.display }}>
            <div className="container py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    {/* <h6 className="text-secondary text-uppercase">Trains</h6> */}
                    <h1 className="mb-5">{props.message}</h1>
                </div>
                <div className="row g-4">
                    {
                        props.trains.map((train) => {
                            return <>
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="team-item p-4">
                                        <h5 className="mb-0">{train.trnName}</h5>
                                        <p>{train.trnNo}</p>
                                        <p>{train.startTime} {" "}  - {" "}   {train.endTime}</p>
                                        <div className="btn-slide mt-2">
                                            <button onClick={() => { props.LoadSeat(train.trnNo) }} className="btn-slide mt-2" style={{ backgroundColor: "white", border: 'none' }}  >
                                                <i style={{ backgroundRepeat: 'no-repeat' }} className="fa fa-arrow-right"></i><span  >Seat Details</span></button>

                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
                <div>
                    <button onClick={() => { props.formDisplay('block') }} className="btn btn-primary w-10 py-3" type="submit" > {"<-"} Back To Form </button>

                </div>
            </div>
        </div>);
}

export default Trains;