import { BrowserRouter } from 'react-router-dom';

import Controlleer from './Security/AllUserRoutes'
import "./GlobalCss.css"
import { useState } from 'react';
import Admin from './AdminFlow';

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
   <Admin></Admin>
   </BrowserRouter>
   </div>
   
   </>
  );
}

export default App;
