import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/utility/ProtectedRoute';

import WelcomePage from './components/pages/WelcomePage';
import UserNew from './components/pages/UserNew';
import WelcomeNew from './components/pages/WelcomeNew';
import PetitionsIndex from './components/petitions/PetitionsIndex';
import HomePage from './components/petitions/HomePage';
import Profile from './components/auth/Profile';
import PetitionsShow from './components/petitions/PetitionsShow';
import PetitionsEdit from './components/petitions/PetitionsEdit';


import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/welcome" component={WelcomePage} />
            <Route path="/petitions/:id/edit" component={PetitionsEdit} />
            <Route exact path="/petitions" component={PetitionsIndex} />
            <Route path="/petitions/:id" component={PetitionsShow} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/usernew/new" component={UserNew} />
            <Route path="/welcomenew/new" component={WelcomeNew} />
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
