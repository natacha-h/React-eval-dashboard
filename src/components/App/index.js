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
import Search from 'src/components/Search';
import ReposResults from 'src/components/RepoResults';
// == Composant

class App extends React.Component {

  state = {
    view: 'search',
    value: '',
    results: [],
    loading: false,
    files: [],
  }

  // gestion de l'input
  // composant controlé => saisie dans l'input
  onInputChange = (inputValue) => {
    this.setState({
      value: inputValue,
    });
  }
  // soumission du formulaire
  onSubmitSearch = () => {
    const { value } =  this.state;
    this.setState({
      loading: true,
      // view: 'repos',
    })
    // Je fais me recherche axios
    axios.get(`https://api.github.com/search/repositories?q=${value}`) // template string = pas besoin de concaténer :D
    .then( (response) => {
      const results= response.data.items; // stockage des résultats dans une variable
      // mise en forme des données
      const formattedResults = results.map(result => ({
        id: result.id,
        name: result.name,
        description: result.description,
        author: result.owner.login,
        image: result.owner.avatar_url,
        repoUrl: `${result.url}/contents`, 
      }));

      this.setState({
        loading: false, // je n'oublie pas de remettre loading à false sinon ça continue de tourner dans la barre de recherche
        results: formattedResults,
        // hasMessage: true,
        // message: 'La recherche pour ' + searchValue + ' a donné ' + results.length + ' résultat(s)',
      })
    })
    .catch((error) => {
      // console.log('oups, ça a pas marché');
      this.setState({
        loading: false,
        hasMessage: true,
        message: error.message,
      })
    });
  }

  // gestion vue via les menus
  changeView = view => () => {
    console.log('click ! on : ', view)
    this.setState({
      view
    })
  }

  // affichage du détail d'un repo
  onRepoClick = (url) => () => {
    this.setState({
      loading: true,
    })
    axios.get(url)
    .then((response) => {
      // je stocke les fichiers/dossiers reçus depuis l'API
      const files = response.data;
      // je les formatte pour ne garder que ce qui m'intéresse
      const formattedFiles = files.map(file => ({
        name: file.name,
        type: file.type
      }));
      // Je récupère uniquement les dossiers
      const onlyFolders = formattedFiles.filter(currentFile => (currentFile.type === 'dir'));
      //Je récupère uniquement les fichiers
      const onlyFiles = formattedFiles.filter(currentFile => (currentFile.type === 'file'));
      // je met tout ça dans l'ordre
      const orderedFiles = [ ...onlyFolders, ...onlyFiles];
      this.setState({
        loading: false,
        files: orderedFiles,
        // view: 'files',
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // backToResults = () => {
  //   this.setState({
  //     view: 'repos',
  //   })
  // }

  hasResults = () => {
    const {results} = this.state;
    if (results) return <ReposResults results={results} onRepoClick={this.onRepoClick} />


  }

  render() {

    const { view, value, loading } = this.state;

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
