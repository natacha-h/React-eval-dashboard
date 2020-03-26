import { SEARCH_REPOS, receiveResults } from './reducer'
import axios from 'axios';

const AjaxMiddleware = store => next => (action) => {

    switch (action.type) {
      case SEARCH_REPOS:{
        //je récupère la valeur de l'input
        const value = action.value
         axios.get(`https://api.github.com/search/repositories?q=${value}`) // template string = pas besoin de concaténer :D
           .then((response) => {
            const results= response.data.items;
            // mise en forme des données
            const formattedResults = results.map(result => ({
                id: result.id,
                name: result.name,
                description: result.description,
                author: result.owner.login,
                image: result.owner.avatar_url,
                repoUrl: `${result.url}/contents`, 
            }));
            // Je renvoie les données reçue au state
            store.dispatch(receiveResults(formattedResults));
    })
           .catch()
           }
      default:
         next(action);
    }
  };
  
  export default AjaxMiddleware;    