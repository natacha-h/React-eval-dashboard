// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import RepoFilesList from 'src/components/RepoFilesList';
import { formatRepoFiles } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    files: formatRepoFiles(state),
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = {};

// Container
const  RepoFilesListContainer = connect(mapStateToProps, mapDispatchToProps)(RepoFilesList);

// == Export
export default RepoFilesListContainer ;