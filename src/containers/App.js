// imports
import { connect } from 'react-redux';
import App from 'src/components/App';



const mapStateToProps = state => ({
  results: state.results,
  files: state.files,
  view: state.view,
});

const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
