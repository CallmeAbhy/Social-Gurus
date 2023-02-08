
import Landing from './components/Landing';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posting from './components/Posting';
import Employee from './components/Employee';
import Organization from './components/Organization';
import NavBar from './components/NavBar';
import You from './components/You';
import Notification from './components/Notification';
import Connect from './components/Connect';
import Sign_in from './components/Sign_in';
import SearchSec from './components/SearchSec';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Nav />
        
      </header>
      
      <main>
      <Switch>
      <Route path="/" exact component={ Landing }></Route>
      <Route path="/Login" component={ Sign_in }></Route>
      <Route path="/Employee" component={ Employee }></Route>
      <Route path="/Organization" component={ Organization }></Route>
      <Route path="/Notification" component={ Notification }></Route>
      <Route path="/You" component={ You }></Route>
      <Route path="/Connect" component={ Connect }></Route>
      <Route path="/Posting" component={ Posting }></Route>
      <Route path="/SearchSec" component={ SearchSec }></Route>
      </Switch>

      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
