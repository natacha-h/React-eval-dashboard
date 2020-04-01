import { GET_USER, connectUser} from './reducer'
import axios from 'axios';

const GetUserMiddleware = store => next => (action) => {

    switch (action.type) {
        case GET_USER:{
            axios.get('https://api.github.com/users/natacha-h', {
                headers: {
                Authorization: `token ${store.getState().userToken}`,
                }
            }) 
            .then((response) => {
            const userDatas = response.data;
            console.log(userDatas);
            // je renvoie les données reçues au state
            store.dispatch(connectUser(userDatas));
            
            })
            .catch((error) => {
                console.log('erreur dans GetUserMiddleware: ', error);
            }
            )
        }
      default:
         next(action);
    }
  };
  
  export default GetUserMiddleware;    
  