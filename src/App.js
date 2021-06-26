import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbars';

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
       <Navbar></Navbar>
      <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:employee_id" component={EditUser} />
          <Route exact path="/users/:employee_id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
     

   

    </div>
  );
}

export default App;
