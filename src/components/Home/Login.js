// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Form} from 'semantic-ui-react';

// == Import: local


// == Composant
const Login = ({clickOnConnect, userToken}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        clickOnConnect();

    }

    return (
        <Form id="login-form"
        onSubmit={handleSubmit}>
            <Form.Field>
                <label>Votre Token GitHub</label>
                <Input 
                placeholder='token GitHub'
                value={userToken}
                />
            </Form.Field>
            <Button color='teal'>Se connecter</Button>
        </Form>
    
    )
} 

// == Validation props
Login.propTypes = {
    clickOnConnect: PropTypes.func.isRequired,
    userToken: PropTypes.string.isRequired
}

Login.defaultProps = {
    userToken: '',
}

// == Export
export default Login;