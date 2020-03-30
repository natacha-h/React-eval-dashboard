import { GET_USER } from './reducer'
import axios from 'axios';

const GetUserMiddleware = store => next => (action) => {

    switch (action.type) {
        case GET_USER:{
            console.log(store.getState().userToken);
            axios.get('https://api.github.com/users/natacha-h', {
                headers: {
                Authorization: `token ${store.getState().userToken}`,
                }
            }) 
            .then((response) => {
            
            console.log(response.data);
            // je renvoie les données reçues au state
            
            })
            .catch((error) => {
                console.log('erreur : ', error);
            }
            )
        }
      default:
         next(action);
    }
  };
  
  export default GetUserMiddleware;    
  