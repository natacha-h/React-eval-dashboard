import { FIND_ONE_REPO, receiveFiles } from './reducer'
import axios from 'axios';

const OneRepoMiddleware = store => next => (action) => {
    switch (action.type) {
      case FIND_ONE_REPO:{
        //petite vérification
        // console.log('click sur le repo' , action.url);
        axios.get(action.url) 
          .then((response) => {
          const files = response.data;
          // console.log(files);
          // console.log(response);
          // Je renvoie les données reçue au state
          store.dispatch(receiveFiles(files));
          })
          .catch()
        }
      default:
         next(action);
    }
};
  
  export default OneRepoMiddleware;    
  