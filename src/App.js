import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Static element imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';

// About page imports
import About from './components/pages/About';
// import AboutLeadership from './components/pages/aboutPages/Leadership';
// import AboutCompanyHistory from './components/pages/aboutPages/CompanyHistory';
// import AboutFreezingHistory from './components/pages/aboutPages/FreezingHistory';
// import AboutSafety from './components/pages/aboutPages/Safety';

import SoilFreezeAdvantage from './components/pages/SoilFreezeAdvantage';
import Projects from './components/pages/Projects';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import Terms from './components/pages/Terms';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          {/* <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path='/about/companyhistory' element={<AboutCompanyHistory />} />
          <Route path='/about/freezinghistory' element={<AboutFreezingHistory />} />
          <Route path='/about/safety' element={<AboutSafety />} /> */}
        <Route path="/advantage" element={<SoilFreezeAdvantage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
