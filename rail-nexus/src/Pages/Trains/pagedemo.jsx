import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredTrain from './FilteredTrain';
import Header from '../Header';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [filters, setFilters] = useState({
        originDate: "",
        originId: "",
        sourceId: ""
    });

    const [isOpen, setIsopen] = useState(true);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (<>
        {/* <Header></Header> */}
        <div className="container-fluid mt-3">
             <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Filter</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times">Close</i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li> <input
                                    className="form-control"
                                    type="date"
                                    id="filterOption1"
                                    value={filters.originDate}
                                    onChange={(e) => handleFilterChange("originDate", e.target.value)}
                                /></li>
                                <li> <label htmlFor="destinationStation">Source Station</label>
                                <div className="form-   ">
                                    <select
                                        className="form-control"
                                        id="sourceId"
                                        name="sourceId"
                                        value={filters.sourceId}
                                        onChange={(e) => handleFilterChange("sourceId", e.target.value)}
                                    >
                                        <option>Station</option>
                                        {/* Other options */}
                                    </select>
                                </div></li>
                                <li><label htmlFor="destinationStation">Destination Station</label>
                                <div className="  ">
                                    <select
                                        className="form-control"
                                        id="originId"
                                        name="originId"
                                        value={filters.originId}
                                        onChange={(e) => handleFilterChange("originId", e.target.value)}
                                    >
                                        <option>Station</option>
                                        {/* Other options */}
                                    </select>
                                    </div></li>
                             
                            </ul>
                        </div>
                    </div>
                  
                 <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           
                 <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4 ${isOpen === true ? "w-200" : ""}`} style={{ backgroundColor: "white", minHeight: "100vh" }}>
             {/* Toggle Sidebar */}
                    {/* </button> */}
                    <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <i  > Filter Trains</i>
                                </div>
                    {/* Render your FilteredTrain component here */}
                    <FilteredTrain filters={filters} />
                </main>
          </div> 
          </>  
    );
};

export default App;
