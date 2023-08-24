import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredTrain from './FilteredTrain';
import MyContext from '../../MyContext';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Autocomplete, TextField } from '@mui/material';
import StationService from '../../Services/Station.service';
import { useEffect } from 'react';

const FilterSidebar = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();
    const formData = location.state?.formData || {};
    const [filters, setFilters] = useState({
        originDate: new Date(),
        sourceId: "",
        originId: "",
        ...formData
    });
    const [value, setValue] = useState(null);
    const [originValue, setOriginValue] = useState(null);
    const [stations, setStaions] = useState();
    const defaultProps = {
        options: stations,
        getOptionLabel: (option) => option.cityName,
    };
    useEffect(() => { console.log("changin in parent") }, [filters.originDate])
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));

    };
    const LoadStation = () => {
        StationService
            .getAll()
            .then((response) => {
                console.log('Printing employees data', response.data);
                setStaions(response.data);

            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };
    useEffect(() => { LoadStation(); }, []);
    return (<>
        {/* <Header></Header> */}
        {/* <Modal show={show} onHide={handleClose}>
            <Login></Login>
        </Modal> */}
        <div className="container-fluid mt-3">
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Filter</h4>
                    <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times">Close</i></div>
                </div>

                <div className="sd-body">
                    <ul>
                        <li> </li>
                        <br />
                        <li>
                            {/* <label htmlFor="destinationStation">Source Station</label> */}
                            <div className="form-   ">
                                {/* <select
                                        className="form-control"
                                        id="sourceId"
                                        name="sourceId"
                                        value={filters.sourceId}
                                        onChange={(e) => handleFilterChange("sourceId", e.target.value)}
                                    >
                                        <option>Station</option>
                                        Other options
                                    </select> */}
                                <Autocomplete
                                    {...defaultProps}
                                    id="sourceId"
                                    name="sourceId"
                                    disableClearable
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        // Set the selected value to your form data
                                        setFilters((prevFormData) => ({
                                            ...prevFormData,
                                            sourceId: newValue.id, // Assuming the station object has an 'id' property
                                        }));
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="source Station" variant="standard" />
                                    )}
                                />
                            </div></li>
                        <br />
                        <li>
                            {/* <label htmlFor="destinationStation">Destination Station</label> */}
                            <div className="  ">
                                {/* <select
                                        className="form-control"
                                        id="originId"
                                        name="originId"
                                        value={filters.originId}
                                        onChange={(e) => handleFilterChange("originId", e.target.value)}
                                    >
                                        <option>Station</option>
                                        Other options
                                    </select> */}
                                <Autocomplete
                                    {...defaultProps}
                                    id="origin"
                                    name="origin"
                                    value={originValue}
                                    disableClearable
                                    onChange={(event, newValue) => {
                                        setOriginValue(newValue);
                                        // Set the selected value to your form data
                                        setFilters((prevFormData) => ({
                                            ...prevFormData,
                                            originId: newValue.id, // Assuming the station object has an 'id' property
                                        }));
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="destination Station" variant="standard" />
                                    )}
                                />

                            </div></li>

                    </ul>
                    <br /><br />
                    <ul>
                        <li>
                            <input
                                className="form-control"
                                type="date"
                                id="filterOption1"
                                value={filters.originDate}
                                onChange={(e) => handleFilterChange("originDate", e.target.value)}
                            />
                        </li>
                    </ul>

                </div>
            </div>

            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

            <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4 ${isOpen === true ? "w-200" : ""}`} style={{ backgroundColor: "white", minHeight: "100vh" }}>
                {/* Toggle Sidebar */}
                {/* </button> */}
                <div className="btn btn-primary" onClick={ToggleSidebar} >
                    Filter Trains
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <Autocomplete
                            {...defaultProps}
                            id="sourceId"
                            name="sourceId"
                            disableClearable
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                // Set the selected value to your form data
                                setFilters((prevFormData) => ({
                                    ...prevFormData,
                                    sourceId: newValue.id, // Assuming the station object has an 'id' property
                                }));
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="source Station" variant="standard" />
                            )}
                        />
                    </div>
                    <div className="col-md-4">
                        <Autocomplete
                            {...defaultProps}
                            id="origin"
                            name="origin"
                            value={originValue}
                            disableClearable
                            onChange={(event, newValue) => {
                                setOriginValue(newValue);
                                // Set the selected value to your form data
                                setFilters((prevFormData) => ({
                                    ...prevFormData,
                                    originId: newValue.id, // Assuming the station object has an 'id' property
                                }));
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="destination Station" variant="standard" />
                            )}
                        />

                    </div>
                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="date"
                            id="filterOption1"
                            value={filters.originDate}
                            onChange={(e) => handleFilterChange("originDate", e.target.value)}
                        />
                    </div>
                </div>


                {/* Render your FilteredTrain component here */}
                <MyContext.Provider value={{ filters, setFilters }}>
                    <FilteredTrain filters={filters} />
                </MyContext.Provider>
                {/* <Example></Example> */}
            </main>
        </div>
    </>
    );
};

export default FilterSidebar;
