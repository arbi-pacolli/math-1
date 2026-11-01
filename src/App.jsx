import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Equations from './pages/Equations';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Lessons from './pages/Lessons';
import Practice from './pages/Practice';
import UnitCircle from './pages/UnitCircle';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<Lesson />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/unit-circle" element={<UnitCircle />} />
          <Route path="/equations" element={<Equations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
