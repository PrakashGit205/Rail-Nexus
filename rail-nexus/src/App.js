import { BrowserRouter } from 'react-router-dom';

import Controlleer from './Security/AllUserRoutes'

import React, { useState } from 'react';
import MyContext from './MyContext';import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
   <>
   {/* <div
      className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}
    > */}
{/* <button onClick={toggleDarkMode}>
          Toggle Mode
        </button> */}
   <BrowserRouter>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
  <MyContext.Provider value={""}>
   <Controlleer></Controlleer>
   <ToastContainer />
   </MyContext.Provider>
   </LocalizationProvider>
   </BrowserRouter>
   {/* </div> */}
  
   </>
  );
}

export default App;
