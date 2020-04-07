// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Form} from 'semantic-ui-react';


// == Import: local


// == Composant
const Login = ({clickOnConnect, userToken, onInputChange, message, isConnected}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        clickOnConnect();
    }

    const handleInputChange = evt => {
        const { value, name } = evt.target;
        onInputChange(value, name);
    }
    return (
        <Form id="login-form"
        onSubmit={handleSubmit}>
            <Form.Field>
                <label>Votre Token GitHub</label>
                <Input 
                placeholder='token GitHub'
                value={userToken}
                name='userToken'
                onChange={handleInputChange}
                />
            </Form.Field>

            <Button color='teal'>Se connecter</Button>
        </Form>
    
    )
} 

// == Validation props
Login.propTypes = {
    clickOnConnect: PropTypes.func.isRequired,
    userToken: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isConnected: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
}

Login.defaultProps = {
    userToken: '',
    message: ''
}

// == Export
export default Login;