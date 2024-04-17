import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './Pages/Homepage';

import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PortofolioPage from './Pages/PortofolioPage';
import DetailPortofolio from './Pages/DetailPortofolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/portofolio/:id" element={<DetailPortofolio />} />
      </Routes>
    </Router>
  );
}

export default App;
