// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import: local
import RepoFilesList from 'src/containers/RepoFilesList';
import ReposResults from 'src/components/RepoResults';
import UserRepos from 'src/containers/UserRepos';


const Profile = ({ user, logOut, nbOfFavorites, userRepos, view, favoriteRepos }) => {
    const { login, avatar_url} = user;

    const changeView = () => {
        if (view === "repos") {
            return <ReposResults/>
          }
          if (view === "files") {
            return <RepoFilesList/>
          }
        }
    
    
    return (
    <div id='profile'>
        <Link to='/'>
            <Button 
                id="logout"
                basic
                onClick={logOut}
            >
                Se déconnecter
            </Button>
        </Link>
        <h2> Bonjour {login} </h2>
        <div id="profile-user">
            <Image src={avatar_url} size='medium' bordered />
            <div id="profile-user-stats">
                <h3>Vos repos</h3>
                <p>Vous avez { userRepos.length } repos</p>
                <h3> Vos favoris </h3>
                <p> Vous avez {nbOfFavorites} repos en favori</p>
            </div> 
        </div>
        
        <div className='display-repos'>
            <h2> Mes repos </h2>
            <UserRepos
        />            
        
        </div>
        
        <div className='display-repos'>
            <h2> Mes favoris </h2>
            {/* {changeView()} */}
            <ReposResults
            results={favoriteRepos}
        />       
        </div>
    </div>
)
}

// == Validation props
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    nbOfFavorites: PropTypes.number.isRequired,
    logOut: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    userRepos: PropTypes.array.isRequired,
    favoriteRepos: PropTypes.array.isRequired,
}

// == Export
export default Profile;