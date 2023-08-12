import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Controllor from './Login';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './NavBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    
    <Controllor></Controllor>
    </BrowserRouter>
</>
);

