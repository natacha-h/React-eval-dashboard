import { GET_USER, connectUser, formatResults } from './reducer'
import axios from 'axios';

const GetUserMiddleware = store => next => (action) => {

    const fetchOnGithub = url => {
        return(axios.get(url, {
            headers: {
            Authorization: `token ${store.getState().userToken}`,
            }
            }) 
        )
    }

    switch (action.type) {
        case GET_USER:{
            fetchOnGithub('https://api.github.com/user')
            .then((response) => {
                const userDatas = response.data;
                console.log('reque^te numéro 1 : ' ,userDatas);
                // je récuère mes repos
                fetchOnGithub('https://api.github.com/users/natacha-h/repos')
                .then((response) => {
                    const userRepos = response.data;
                    console.log('requete numéro 2 : ', userRepos);
                    // je formate les repos
                    const formatedRepos = formatResults(userRepos);
                    // je renvoie les données reçues au state
                    store.dispatch(connectUser(userDatas, formatedRepos));
                })
                .catch((error) => {})
            
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
  