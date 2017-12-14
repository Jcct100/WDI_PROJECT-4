import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/utility/ProtectedRoute';

import Login    from './components/auth/Login';
import Register from './components/auth/Register';

import WelcomePage from './components/pages/WelcomePage';
import PetitionsNew from './components/pages/PetitionsNew';
import PetitionsIndex from './components/petitions/PetitionsIndex';
import HomePage from './components/petitions/HomePage';
import Profile from './components/auth/Profile';
import PetitionsShow from './components/petitions/PetitionsShow';
import PetitionsEdit from './components/petitions/PetitionsEdit';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <HomePage />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute exact path="/welcome" component={WelcomePage} />
            <ProtectedRoute path="/petitions/:id/edit" component={PetitionsEdit} />
            <ProtectedRoute exact path="/petitions/new" component={PetitionsNew} />
            <ProtectedRoute path="/petitions/:id" component={PetitionsShow} />
            <ProtectedRoute exact path="/petitions" component={PetitionsIndex} />
            <ProtectedRoute path="/profile/:id" component={Profile} />
            <ProtectedRoute exact path="home" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
