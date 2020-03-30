// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Login from 'src/components/Home/Login';
import { getUser } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = null;

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    clickOnConnect: () => {
        dispatch(getUser())
    },
});

// Container
const  LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

// == Export
export default LoginContainer ;