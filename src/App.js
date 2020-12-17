import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Article} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;