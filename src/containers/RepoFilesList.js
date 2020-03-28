// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import RepoFilesList from 'src/components/RepoFilesList';
import { formatRepoFiles, backToResults } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    files: formatRepoFiles(state),
    name: state.repoName,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    onBackClick: () => {
        dispatch(backToResults())
    },
});

// Container
const  RepoFilesListContainer = connect(mapStateToProps, mapDispatchToProps)(RepoFilesList);

// == Export
export default RepoFilesListContainer ;