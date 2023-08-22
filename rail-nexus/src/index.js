import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import ToggleSidebar from './ToggleDemo';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import "./GlobalCss.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
<GlobalErrorBoundary>
    <App />
    </GlobalErrorBoundary>
    </BrowserRouter>
);


