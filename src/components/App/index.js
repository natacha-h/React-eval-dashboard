// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

// == Import : local
import './app.scss';
// composants
import Navigation from 'src/components/Navigation';
import About from 'src/components/About';

// == Composant

class App extends React.Component {

  state = {
    view: 'home',
  }

  changeView = view => () => {
    console.log('click ! on : ', view)
    this.setState({
      view
    })
  }

  render() {

    const { view } = this.state;

    return (
      <div id="app">
        <header>
          <Navigation
            handleClick={this.changeView}
          />
        </header>
       
        <main>
          <About/>
        </main>
      </div>
    );
  }
} 


// == Export
export default App;
