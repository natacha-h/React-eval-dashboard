// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Button } from 'semantic-ui-react';

// == Import: local


// == Composant
const Profile = () => (
    <div id='profile'>
        <Button basic>Se déconnecter</Button>
        <h2> Bonjour Utilisateur </h2>
        <div id="profile-user">
            <Image src='' size='medium' bordered />
            <div id="profile-user-stats">
                <h3>Vos repos</h3>
                <p>Vous avez XXX repos</p>
                <h3> Vos favoris </h3>
                <p> Vous avez YYY repos en favori</p>

            </div>

        </div>
    </div>

)

// == Validation props
// Profile.propTypes = {
//     handleClick: PropTypes.func.isRequired
// }

// == Export
export default Profile;