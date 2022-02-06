import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <div className="mesh-loader">
        <div className="first-set">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>

        <div className="second-set">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
      </Routes>
    </Router>
  );
}
