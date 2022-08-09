import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router >
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
        </Routes>
    </Router>

  );
}

export default App;
