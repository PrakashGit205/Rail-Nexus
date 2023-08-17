import React from 'react';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {
    
    // const navigate=useNavigate
    const history = useHistory();
    debugger;
    return ( <>this is home page
    <button type="button" className="btn btn-primary" onClick={()=> history.push("/Login")}>Go to Login</button>
    <button type="button" className="btn btn-primary" onClick={()=> history.push("/register")}>Go to Register</button>
    <a href="/login">click here</a>
    
    </> );
}


export default HomePage;