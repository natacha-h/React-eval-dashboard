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

// == Composant

class App extends React.Component {

  // state = {
  //   view: 'search',
  //   value: '',
  //   results: [],
  //   loading: false,
  //   files: [],
  // }
  
  // gestion vue via les menus
  // changeView = view => () => {
  //   console.log('click ! on : ', view)
  //   this.setState({
  //     view
  //   })
  // }

  // affichage du détail d'un repo
  // onRepoClick = (url) => () => {
  //   this.setState({
  //     loading: true,
  //   })
  //   axios.get(url)
  //   .then((response) => {
  //     // je stocke les fichiers/dossiers reçus depuis l'API
  //     const files = response.data;
  //     // je les formatte pour ne garder que ce qui m'intéresse
  //     const formattedFiles = files.map(file => ({
  //       name: file.name,
  //       type: file.type
  //     }));
  //     // Je récupère uniquement les dossiers
  //     const onlyFolders = formattedFiles.filter(currentFile => (currentFile.type === 'dir'));
  //     //Je récupère uniquement les fichiers
  //     const onlyFiles = formattedFiles.filter(currentFile => (currentFile.type === 'file'));
  //     // je met tout ça dans l'ordre
  //     const orderedFiles = [ ...onlyFolders, ...onlyFiles];
  //     this.setState({
  //       loading: false,
  //       files: orderedFiles,
  //       // view: 'files',
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  // backToResults = () => {
  //   this.setState({
  //     view: 'repos',
  //   })
  // }

  // hasResults = () => {
  //   const {results} = this.props;
  //   if (results) return <ReposResults/>
  // }

  render() {

    // const { view, value, loading } = this.state;

    return (
      <div id="app">
        <header>
          <Navigation
            handleClick={this.changeView}
          />
        </header>
       
        <main>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <div>Ici ça sera la Home</div>}
            />
            <Route
              path='/search'
              component={Search}
            />
            <Route
              path='/about'
              component={About}
            />
          </Switch>
                 
        </main>
      </div>

    );

  }
} 


// == Export
export default App;
