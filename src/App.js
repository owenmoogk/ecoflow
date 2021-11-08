import './css/App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          {/* <Route exact path='/our-team' element={<OurTeam />} /> */}
          {/* <Route exact path='/design' element={<Design />} /> */}
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='' element={<Homepage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
