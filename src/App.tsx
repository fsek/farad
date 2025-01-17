import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './modules/Home';
import Studenter from './modules/Studenter';
import Foretag from './modules/Foretag';
import OmOss from './modules/OmOss';
import Utstallare from './modules/Utstallare';


function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utstallare" element={<Utstallare />} />
          <Route path="/foretag" element={<Foretag />} />
          <Route path="/studenter" element={<Studenter />} />
          <Route path="/omoss" element={<OmOss />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
