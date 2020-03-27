import { FIND_ONE_REPO, receiveResults } from './reducer'
import axios from 'axios';

const OneRepoMiddleware = store => next => (action) => {

    switch (action.type) {
      case FIND_ONE_REPO:{
        // petite vérification
         axios.get(url) // template string = pas besoin de concaténer :D
           .then((response) => {
            const files= response.data;
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
            store.dispatch(receiveResults(files));
    })
           .catch()
           }
      default:
         next(action);
    }
  };
  
  export default OneRepoMiddleware;    
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