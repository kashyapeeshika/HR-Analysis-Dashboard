import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Internal imports
import Home from './screens/home';
import About from './screens/About';
import Contacts from './screens/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} /> 
        <Route path="/screens/About.jsx" element={<About />} /> 
        <Route path="/screens/Contacts.jsx" element={<Contacts />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Web vitals reporting
reportWebVitals();
