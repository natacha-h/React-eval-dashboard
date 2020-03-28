// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Search from 'src/components/Search';
import { changeInput, searchRepos } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    value: state.value,
    loading: state.loading,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    onInputChange: (value) => {
        dispatch(changeInput(value))
    },
    onSubmitSearch: (value) => {
        dispatch(searchRepos(value))
    }
});

// Container
const  SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

// == Export
export default SearchContainer ;