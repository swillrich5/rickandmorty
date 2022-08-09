import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router >
        <Navbar />
        <div>
            <h1>Rick & Morty in the House!!!</h1>
        </div>
    </Router>

  );
}

export default App;
