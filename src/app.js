import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/utility/ProtectedRoute';

import WelcomePage from './components/petitions/WelcomePage';
import PetitionIndex from './components/petitions/PetitionIndex';
import HomePage from './components/petitions/HomePage';
import Profile from './components/auth/Profile';
import PetitionShow from './components/petitions/PetitionShow';
import PetitionsEdit from './components/petitions/PetitionsEdit';
import UserNew from './components/petitions/UserNew';
import WelcomeNew from './components/petitions/WelcomeNew';

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
            <Route exact path="/petitions" component={PetitionIndex} />
            <Route path="/petitions/:id" component={PetitionShow} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/UserNew/new" component={UserNew} />
            <Route path="/WelcomeNew/new" component={WelcomeNew} />
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
