// == Import: npm
import { connect } from 'react-redux';

// == Import: local
import Home from 'src/components/Home';
import { getUser } from 'src/store/reducer';

// Préparation
// == Données qui sont dans le State
const mapStateToProps = state => ({
    isConnected: state.isConnected,
});

// == Actions : tout ce qui sera dispatché pour modifier le state
const mapDispatchToProps = dispatch => ({
    clickOnConnect: () => {
        dispatch(getUser())
    },
});

// Container
const  HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

// == Export
export default HomeContainer ;