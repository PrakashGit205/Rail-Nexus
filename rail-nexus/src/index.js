import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import ToggleSidebar from './ToggleDemo';
import GlobalErrorBoundary from './GlobalErrorBoundary';
// import "./GlobalCss.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GlobalErrorBoundary>
    <App />
    </GlobalErrorBoundary>
 
);


