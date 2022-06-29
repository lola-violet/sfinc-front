import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route path="about" element={<About />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
