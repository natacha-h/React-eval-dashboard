// imports
import { connect } from 'react-redux';
import App from 'src/components/App';



const mapStateToProps = state => ({
  results: state.results,
});

const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
