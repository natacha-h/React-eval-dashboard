import { SEARCH_REPOS, receiveResults, formatResults } from './reducer'
import axios from 'axios';

const AjaxMiddleware = store => next => (action) => {

    switch (action.type) {
      case SEARCH_REPOS:{
        //je récupère la valeur de l'input
        const value = store.getState().value;
        // petite vérification
        // console.log('Je suis AjaxMiddleware et je lance une recherche pour la valeur ', value);

         axios.get(`https://api.github.com/search/repositories?q=${value}`) // template string = pas besoin de concaténer :D
          .then((response) => {
          const results= response.data.items;
          const formatedResults = formatResults(results);
          console.log(results);
          // je renvoie les données reçues au state
          store.dispatch(receiveResults(formatedResults));
          })
          .catch()
          }
      default:
         next(action);
    }
  };
  
  export default AjaxMiddleware;    
  