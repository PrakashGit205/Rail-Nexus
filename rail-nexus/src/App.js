import { BrowserRouter } from 'react-router-dom';

import Controlleer from './Security/AllUserRoutes'

import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
   <>
   <div
      className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}
    >
{/* <button onClick={toggleDarkMode}>
          Toggle Mode
        </button> */}
   <BrowserRouter>
   <Controlleer></Controlleer>
   </BrowserRouter>
   </div>
   
   </>
  );
}

export default App;
