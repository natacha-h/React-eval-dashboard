// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// == Import : local
import './app.scss';
// composants
import Navigation from 'src/components/Navigation';
import About from 'src/components/About';
import Search from 'src/containers/Search';
import Home from 'src/containers/Home';
import Profile from 'src/containers/Profile';
import RepoFilesList from 'src/containers/RepoFilesList';

// == Composant

class App extends React.Component {

  render() {

    return (
      <div id="app">
        <header>
          <Navigation/>
        </header>
       
        <main>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              path='/profile'
              component={Profile}
            />
            <Route
              path='/search'
              component={Search}
            />
            <Route
              path='/about'
              component={About}
            />
            <Route
              path='/repo/:name'
              component={RepoFilesList}
            />
          </Switch>
                 
        </main>
      </div>

    );

  }
} 


// == Export
export default App;
