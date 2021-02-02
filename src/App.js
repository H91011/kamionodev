import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'


function App() {
  return (
    <Router>
      <div>

        <p>Ready for Development</p>

      </div>

      <Switch>
        <Route>
          <Home exact path="/"></Home>
        </Route>
      </Switch>

    </Router>



  );
}

export default App;
