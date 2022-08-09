import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
            </Routes>
        </div>
    </Router>

  );
}

export default App;
