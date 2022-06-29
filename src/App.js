// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
