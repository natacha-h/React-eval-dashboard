// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import: local
import Login from './Login';
import Profile from './Profile';

import './home.scss';

// == Composant
const Home = ({ isConnected, clickOnConnect }) => (
    <div>
        { 
        isConnected ? <Profile/> : 
        < Login
            clickOnConnect={clickOnConnect}
        />  
        
        }
    </div>

)

// == Validation props
Home.propTypes = {
    isConnected: PropTypes.bool.isRequired,
}

// == Export
export default Home;