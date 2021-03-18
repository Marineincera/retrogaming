
import './App.css';
import Main from './Main/Main'
import Homepage from './Main/Homepage/Homepage';
import SelectionCharacterSection from './Main/SelectionCharacterSection/SelectionCharacterSection';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomingPage from './Main/WelcomingPage/WelcomingPage';
import SelectionCharacterPage from './Main/SelectionCharacterPage/SelectionCharacterPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Main></Main>
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
      </Switch>
      </div>
    </Router>
  );
}

export default App;


