// imports
import { connect } from 'react-redux';
import App from 'src/components/App';

import { countUp } from '../store/reducer';

const mapStateToProps = state => ({
  message: state.message,
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    // Dispatch est une méthode qui me vient du store
    // Elle attend FORC2MENT un objet d'action en paramètre.
    // Pour ne pas nous tromper dans la syntaxe des objets d'action
    // On utilise une fonction qui le génerera pour nous (countUp)
    dispatch(countUp());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
