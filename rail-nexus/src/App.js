import { BrowserRouter } from 'react-router-dom';

import Controlleer from './Security/AllUserRoutes'

import React, { useState } from 'react';
import MyContext from './MyContext';

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
  <MyContext.Provider value={""}>
   <Controlleer></Controlleer>
   </MyContext.Provider>
   </BrowserRouter>
   {/* </div> */}
  
   </>
  );
}

export default App;
