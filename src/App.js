import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Catergories from './components/Catergories';

function App() {
  return (
    <div className="section">
      <div className="container">
        <NavBar />

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catergories" element={<Catergories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
