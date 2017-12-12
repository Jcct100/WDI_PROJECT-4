import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class WelcomePage extends React.Component {

  render() {
    return(
      <div>
        <h1>PetTinder</h1>
        <h2>Tinder for Petitions</h2>
        <p><strong>Tutorial:</strong> Lorem ipsum dolor sit amet, veniam luptatum sadipscing ei quo. Soluta causae timeam te pri. Cu eos pertinax electram, timeam meliore postulant has ne, ut usu quot primis. His ut quodsi accusamus, mel cu possit perfecto perpetua.

Pro altera possim everti eu, ei sea bonorum appareat percipit. Ne cibo quando copiosae ius, est choro solet apeirian an. Eu postea officiis mea, ex duo elitr ubique omnium. Quo labore admodum ei, illud instructior voluptatibus ex has. No quo integre incorrupte elaboraret, dicit laboramus per an. Nam et etiam possit inimicus, placerat persecuti nec et.</p>
        <p><strong>About us:</strong> Lorem ipsum dolor sit amet, veniam luptatum sadipscing ei quo. Soluta causae timeam te pri. Cu eos pertinax electram, timeam meliore postulant has ne, ut usu quot primis. His ut quodsi accusamus, mel cu possit perfecto perpetua.
Pro altera possim everti eu, ei sea bonorum appareat percipit. Ne cibo quando copiosae ius, est choro solet apeirian an. Eu postea officiis mea, ex duo elitr ubique omnium. Quo labore admodum ei, illud instructior voluptatibus ex has. No quo integre incorrupte elaboraret, dicit laboramus per an. Nam et etiam possit inimicus, placerat persecuti nec et.</p>
        <button className="main-button">
          { Auth.isAuthenticated() && <Link to="/petitions/new">
            <i className="fa fa-plus" aria-hidden="true">Create your own petition:</i>Create
          </Link> }
        </button>
        <button className="main-button">
          <Link to="/petitions">
            <i className="fa fa-plus" aria-hidden="true">Search for petitions now:</i>Search
          </Link>
        </button>
      </div>
    );
  }

}


export default WelcomePage;
