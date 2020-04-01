// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Profile from 'src/components/Home/Profile';
import { logOut, formatResults, getUserOwnRepos } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    user: state.user,
    nbOfFavorites: state.favRepos.length,
    repos: formatResults(state),
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    logOut: () => {
        console.log('clic sur logout');
        dispatch(logOut())
    },
    findUserRepos: (value) => {
        dispatch(getUserOwnRepos(value))
    }
});

// Container
const  ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

// == Export
export default ProfileContainer ;