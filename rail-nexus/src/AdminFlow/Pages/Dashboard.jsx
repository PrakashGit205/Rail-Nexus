// Dashboard.js
import React from 'react';

function Dashboard() {
    return (
       <>
       <div className="container">
        <div className="row">
          {/* <h2>filter by date</h2> */}
            <div key={1} className="col-md-4 mb-4">
              <div className="card" style={{backgroundColor:" #034f84",color:"white"}}>
                <div className="card-body">
                  <h5 className="card-text"> </h5>
                  <p className="card-title">Total Seat Booked Today  </p>
                  <p className="card-text"> this is text</p>
                  </div>
              </div>
            </div>

            </div>
            </div>
       </>
    );
}

export default Dashboard;
