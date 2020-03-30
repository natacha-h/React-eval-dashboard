// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import: local
import Login from 'src/containers/Login';
import Profile from './Profile';

import './home.scss';

// == Composant
const Home = ({ isConnected }) => (
    <div>
        { 
        isConnected ? <Profile/> : 
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