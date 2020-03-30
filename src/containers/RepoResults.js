// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import RepoResults from 'src/components/RepoResults';
import { formatResults } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    results: formatResults(state),
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = {};

// Container
const  RepoResultsContainer = connect(mapStateToProps, mapDispatchToProps)(RepoResults);

// == Export
export default RepoResultsContainer ;