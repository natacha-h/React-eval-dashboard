import { GET_USER_OWN_REPOS, receiveUserOwnRepos} from './reducer'
import axios from 'axios';

const GetUserReposMiddleware = store => next => (action) => {

    switch (action.type) {
        case GET_USER_OWN_REPOS:{
            const url = store.getState().user.repos_url;
            console.log('https://api.github.com/users/natacha-h/repos');
            axios.get(url) 
            .then((response) => {
            const userRepos = response.data;
            console.log(userRepos);

            // je renvoie les données reçues au state
            store.dispatch(receiveUserOwnRepos(userRepos));
            
            })
            .catch((error) => {
                console.log('erreur dans GetUserReposMiddleware : ', error);
            }
            )
        }
      default:
         next(action);
    }
  };
  
  export default GetUserReposMiddleware;    
  