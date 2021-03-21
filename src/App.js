import './App.css';
import Homepage from './Main/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WelcomingPage from './Main/WelcomingPage/WelcomingPage';
import SelectionCharacterPage from './Main/SelectionCharacterPage/SelectionCharacterPage';
import ResumePage from './Main/ResumePage/ResumePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/selection">
            <SelectionCharacterPage/>
          </Route>
          <Route path="/welcome/:persoid/:pseudo">
            <WelcomingPage/>
          </Route>
          <Route path="/resume/:persoid/:pseudo">
            <ResumePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


