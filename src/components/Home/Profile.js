// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Button } from 'semantic-ui-react';

// == Import: local
import DisplayCard from 'src/containers/DisplayCard'; 
import RepoFilesList from 'src/containers/RepoFilesList';
import ReposResults from 'src/containers/RepoResults';


// == Composant
// j'ai besoin des ComponentDidMount ==> je transforme Profile en class
class Profile extends React.Component {

    componentDidMount() {
        const { user, findUserRepos } = this.props;
        const { repos_url } = user;
        findUserRepos(repos_url);
    }

    changeView = () => {
        const { view } = this.props; 
        if (view === "repos") {
          return <ReposResults/>
        }
        if (view === "files") {
          return <RepoFilesList/>
        }
      }

    render(){
        const { user, logOut, nbOfFavorites, repos } = this.props;
        const { login, avatar_url, public_repos} = user
        return (
            <div id='profile'>
                <Button 
                    id="logout"
                    basic
                    onClick={logOut}
                >
                    Se déconnecter
                </Button>
                <h2> Bonjour {login} </h2>
                <div id="profile-user">
                    <Image src={avatar_url} size='medium' bordered />
                    <div id="profile-user-stats">
                        <h3>Vos repos</h3>
                        <p>Vous avez { public_repos } repos</p>
                        <h3> Vos favoris </h3>
                        <p> Vous avez {nbOfFavorites} repos en favori</p>
                    </div> 
                </div>
                <Card.Group>
                    {repos.map(repo => 
                        <DisplayCard
                            key={repo.id}         
                            {...repo}
                        />           
                    )}
              </Card.Group>  
              {this.changeView()}          
            </div>
        )        
    }
}

// const Profile = ({ user, logOut, nbOfFavorites, repos }) => {
//     const { login, avatar_url, public_repos, repos_url} = user
//     return (
//     <div id='profile'>
//         <Button 
//             basic
//             onClick={logOut}
//         >
//             Se déconnecter
//         </Button>
//         <h2> Bonjour {login} </h2>
//         <div id="profile-user">
//             <Image src={avatar_url} size='medium' bordered />
//             <div id="profile-user-stats">
//                 <h3>Vos repos</h3>
//                 <p>Vous avez { public_repos } repos</p>
//                 <h3> Vos favoris </h3>
//                 <p> Vous avez {nbOfFavorites} repos en favori</p>
//             </div> 
//         </div>
//         <Card.Group>
//             {repos.map(repo => 
//                 <DisplayCard
//                     key={repo.id}         
//                     {...repo}
//                 />           
//             )}
//       </Card.Group>
    
//     </div>
// )
// }

// == Validation props
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    nbOfFavorites: PropTypes.number.isRequired,
}

// == Export
export default Profile;