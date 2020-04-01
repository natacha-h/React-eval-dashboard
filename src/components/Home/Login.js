// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Form} from 'semantic-ui-react';

// == Import: local


// == Composant
const Login = ({clickOnConnect}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        clickOnConnect();

    }

    return (
        <Form id="login-form"
        onSubmit={handleSubmit}>
            <Form.Field>
                <label>Votre nom d'utilisateur GitHub</label>
                <Input placeholder='pseudo GitHub'/>
            </Form.Field>
            <Button color='teal'>Se connecter</Button>
        </Form>
    
    )
} 

// == Validation props
Login.propTypes = {
    clickOnConnect: PropTypes.func.isRequired,
}

// == Export
export default Login;