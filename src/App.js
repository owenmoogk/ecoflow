import './App.css';
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Nav from './components/Nav';
import OurTeam from './components/OurTeam';
import Vision from './components/Vision';
import Solution from './components/Solution'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path='/our-team' element={<OurTeam />} />
          <Route exact path='/vision' element={<Vision />} />
          <Route exact path='/solution' element={<Solution />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/' element={<Homepage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
