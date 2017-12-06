import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/utility/ProtectedRoute';

import WelcomePage from './components/petitions/WelcomePage';
import PetitionPage from './components/petitions/PetitionPage';
import HomePage from './components/petitions/HomePage';
import UserShow from './components/petitions/UserShow';
import PetitionShow from './components/petitions/PetitionShow';


import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          {/* <h1>E-petition</h1> */}
          <Switch>
            <Route exact path="/welcome" component={WelcomePage} />
            <Route path="/petitions/:id" component={PetitionShow} />
            <Route exact path="/petitions" component={PetitionPage} />
            <Route path="/UserShow" component={UserShow} />
            <Route exact path="/" component={HomePage} />
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
