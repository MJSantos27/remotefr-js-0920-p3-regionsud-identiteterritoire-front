import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './components/templates';
import Commune from './components/pages/Commune'; // Exemple
import Home from './components/pages/Home'; // Exemple
import DestinationContainer from './components/Destination/container';

function App() {
  return (
    <div>
      <Templates>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destination" component={DestinationContainer} />
          <Route exact path="/commune/:id" component={Commune} />
        </Switch>
      </Templates>
    </div>
  );
}

export default App;