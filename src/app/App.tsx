import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EpidemicDetail from './pages/EpidemicDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epidemic/:id" element={<EpidemicDetail />} />
      </Routes>
    </Router>
  );
}