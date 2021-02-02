import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home'


function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home exact path="/"></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
