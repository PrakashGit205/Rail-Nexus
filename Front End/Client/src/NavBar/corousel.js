function Corousel() {
    return (   
        // < !--Carousel Start-- >
        // <div className="container-fluid p-0 pb-5">
            <div className="owl-carousel header-carousel position-relative mb-5">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style ={{background: "rgba(6, 3, 21, .5)"}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Logistics</span> Solution</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <a href="" className="btn btn abs-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style ={{background: "rgba(6, 3, 21, .5)"}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Transport</span> Solution</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
       );
}

export default Corousel;