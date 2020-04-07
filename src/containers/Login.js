// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Login from 'src/components/Home/Login';
import { getUser, changeInput } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    userToken: state.userToken,
    message: state.message,
    isConnected: state.isConnected,
    loading: state.loading,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    clickOnConnect: () => {
        dispatch(getUser())
    },
    onInputChange: (value, name) => {
        dispatch(changeInput(value, name))
    }
});

// Container
const  LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

// == Export
export default LoginContainer ;