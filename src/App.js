import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import SkillsPage from './components/SkillsPage';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <div className="page"> {/* Ensure a wrapper div for your page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
