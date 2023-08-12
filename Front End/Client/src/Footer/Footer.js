import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
    const history = useHistory();
    return (<div className="container-fluid bg-dark text-light footer pt-2 wow fadeIn" data-wow-delay="0.1s"
        // style="margin-top: 6rem;"
    style={{marginTop : "4rem"}} >
    <div className="container py-3">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Address</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Phase 1,Hijewadi,Pune,India</p>
                {/* <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p> */}
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/prakash-kumar-rathour"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Services</h4>
                <p className="btn btn-link" >1AC Ticket</p>
                <p className="btn btn-link" >2AC Ticket</p>
                <p className="btn btn-link" >3AC Ticket</p>
                <p className="btn btn-link" >Sleeper Ticket</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                <button className="btn btn-link" onClick={ ()=>{history.push("/about-us")   }}>About Us</button>
                <button className="btn btn-link" onClick={ ()=>{history.push("/contact-us")   }}>Contact Us</button>
                {/* <button className="btn btn-link" onClick={ ()=>{history.push("/")   }}>Our Services</button> */}
                <button className="btn btn-link" onClick={ ()=>{history.push("/term&condition")   }}>Terms & Condition</button>
                <button className="btn btn-link" onClick={ ()=>{history.push("/support")   }}>Support</button>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Newsletter</h4>
                <p>Aloo lelo</p>
                    <div className="position-relative mx-auto"
                        // style="max-width: 400px;"
                    style={{maxWidth : "400px"}}
                    >
                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">IRCTC.COM</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By <a className="border-bottom" href="TrickyAgriculture.com"> Prakash Kumar Rathour</a>
                </div>
            </div>
        </div>
    </div>
</div> );
}

export default Footer;