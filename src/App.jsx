import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PortofolioPage from './Pages/PortofolioPage';
import DetailPortofolio from './Pages/DetailPortofolio';
import Chat from './Components/Chat/Chat';

function App() {
  useEffect(() => {
    AOS.init({
      // Pilihan konfigurasi AOS di sini
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/portofolio/:id" element={<DetailPortofolio />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
