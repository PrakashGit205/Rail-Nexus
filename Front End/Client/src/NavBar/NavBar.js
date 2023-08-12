import { useHistory,Link,BrowserRouter as Router } from "react-router-dom";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar(props) {

    const history = useHistory();
    const Login = () => {
        history.push('/login');
    }
    return (<nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <a href="index.html" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
            <h2 className="mb-2 text-white">IRCTC</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a className="nav-item nav-link">About</a>
                <a className="nav-item nav-link">Services</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-up m-0">
                        
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div class="col-2">
                <button onClick={Login} class="btn btn-primary w-50 py-2" type="submit" >
              Login Or Signup  </button>

            </div>    </div>
    </nav>);
}

export default NavBar;