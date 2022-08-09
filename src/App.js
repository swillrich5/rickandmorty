import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/characters' element={<Characters />}/> 
                <Route exact path='/locations' element={<Locations />}/> 
                <Route exact path='/episodes' element={<Episodes />}/>                     
            </Routes>
        </div>
    </Router>

  );
}

export default App;
