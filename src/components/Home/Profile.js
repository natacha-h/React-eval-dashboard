// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Button } from 'semantic-ui-react';

// == Import: local


// == Composant
const Profile = ({ user, logOut, nbOfFavorites }) => {
    const { login, avatar_url, public_repos} = user
    return (
    <div id='profile'>
        <Button 
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
    </div>
)
}

// == Validation props
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    nbOfFavorites: PropTypes.number.isRequired,
}

// == Export
export default Profile;