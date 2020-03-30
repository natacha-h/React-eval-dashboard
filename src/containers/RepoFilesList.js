// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import RepoFilesList from 'src/components/RepoFilesList';
import { formatRepoFiles, backToResults, favRepo, getFavStatus } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    files: formatRepoFiles(state),
    name: state.repoName,
    isFav: getFavStatus(state),
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    onBackClick: () => {
        dispatch(backToResults())
    },
    onFavClick: () => {
        console.log('click sur fav');
        dispatch(favRepo())
    },
});

// Container
const  RepoFilesListContainer = connect(mapStateToProps, mapDispatchToProps)(RepoFilesList);

// == Export
export default RepoFilesListContainer ;