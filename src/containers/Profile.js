// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Profile from 'src/components/Home/Profile';
import { logOut } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    user: state.user,
    nbOfFavorites: state.favRepos.length,
    userRepos: state.userRepos,
    favoriteRepos: state.favRepos,
    view: state.view,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    logOut: () => {
        console.log('clic sur logout');
        dispatch(logOut())
    },

});

// Container
const  ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

// == Export
export default ProfileContainer ;