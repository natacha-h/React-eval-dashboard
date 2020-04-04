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