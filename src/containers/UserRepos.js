// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import RepoResults from 'src/components/RepoResults';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    results: state.userRepos,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = {};

// Container
const  UserReposContainer = connect(mapStateToProps, mapDispatchToProps)(RepoResults);

// == Export
export default UserReposContainer ;