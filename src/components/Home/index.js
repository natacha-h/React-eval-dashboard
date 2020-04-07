// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import: local
import Login from 'src/containers/Login';

import './home.scss';

// == Composant
const Home = ({ isConnected }) => (

    <div>
        <h1>Bienvenue sur votre tableau de bord</h1>
        { 
        isConnected ? <Redirect to='/profile'/>: 
        < Login/>  
        }
    </div>

)

// == Validation props
Home.propTypes = {
    isConnected: PropTypes.bool.isRequired,
}

// == Export
export default Home;