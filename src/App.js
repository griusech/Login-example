import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { UserProvider } from './context/UserContext';
import Update from './Components/Update';
import Statistics from './Components/Statistics';
import PrivateRoute from './Components/Routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/update/:id' component={Update} />
              <PrivateRoute exact path='/statistics' component={Statistics} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
