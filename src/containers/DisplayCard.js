// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import DisplayCard from 'src/components/RepoResults/DisplayCard';
import { findOneRepo } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = null;

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = (dispatch, ownProps) => ({
    onRepoClick: () => {
        const { repoUrl, name, id, isfav } = ownProps;
        dispatch(findOneRepo(repoUrl, name, id))
    }
});

// Container
const  DisplayCardContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayCard);

// == Export
export default DisplayCardContainer ;