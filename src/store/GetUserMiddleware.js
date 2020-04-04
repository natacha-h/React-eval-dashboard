import { GET_USER, connectUser, formatResults, receiveUserInfos } from './reducer'
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
                // j'envoie un message comme quoi je suis connecté
                store.dispatch(connectUser('Connecté. Récupération de vos infos en cours'))
                // je récuère mes repos
                fetchOnGithub('https://api.github.com/user/repos')
                .then((response) => {
                    const userRepos = response.data;
                    // je formate les repos
                    const formatedRepos = formatResults(userRepos);
                    // je renvoie les données reçues au state
                    store.dispatch(receiveUserInfos(userDatas, formatedRepos));
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
  