// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Search from 'src/components/Search';
import { changeInput, searchRepos, emptyResults } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    value: state.searchValue,
    loading: state.loading,
    view: state.view,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    onInputChange: (value, name) => {
        dispatch(changeInput(value, name))
    },
    onSubmitSearch: (value) => {
        dispatch(searchRepos(value))
    },
    emptyResults: () => {
        dispatch(emptyResults())
    },
});

// Container
const  SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

// == Export
export default SearchContainer ;