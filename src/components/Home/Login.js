// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Form, Icon} from 'semantic-ui-react';


// == Import: local


// == Composant
const Login = ({clickOnConnect, userToken, onInputChange, message, loading}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        clickOnConnect();
    }

    const handleInputChange = evt => {
        const { value, name } = evt.target;
        onInputChange(value, name);
    }
    return (
        <div>
            <p>{message}</p>
            <Form id="login-form"
            onSubmit={handleSubmit}
            loading={loading}>
                <Form.Field>
                    <label><Icon name='github'/>Votre Token GitHub</label>
                    <Input 
                    placeholder='token GitHub'
                    value={userToken}
                    name='userToken'
                    onChange={handleInputChange}
                    />
                </Form.Field>

                <Button color='teal'>Se connecter</Button>
            </Form>
        </div>
    
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