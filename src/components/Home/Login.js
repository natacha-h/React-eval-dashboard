// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from 'semantic-ui-react';

// == Import: local


// == Composant
const Login = () => (
    <form id="login-form">
        <Input 
            focus
            placeholder="Nom d'utilisateur"
        />
        <Button color='teal'>Se connecter</Button>
    </form>

)

// == Validation props
// Login.propTypes = {
//     handleClick: PropTypes.func.isRequired
// }

// == Export
export default Login;