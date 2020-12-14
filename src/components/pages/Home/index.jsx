import React from 'react';
import { Link } from 'react-router-dom';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/commune/83000">Toulon</Link>
      </div>
    );
  };
}

export default Home;
