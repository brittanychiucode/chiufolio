import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Navbar />
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/projects" element={ <Projects /> }></Route>
          <Route path="/" element={ <Experiences /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
