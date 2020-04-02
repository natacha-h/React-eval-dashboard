// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'semantic-ui-react';

// == Import: local
import './search.scss';

import ReposResults from 'src/containers/RepoResults';
import RepoFilesList from 'src/containers/RepoFilesList';

// == Composant
class Search extends React.Component {

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmitSearch } = this.props;
    onSubmitSearch();
  }
  
  handleInputChange = evt => {
    const { value } = evt.target;
    const { onInputChange } = this.props;
    onInputChange(value);
  }

  changeView = () => {
    const { view } = this.props;
    if (view === "repos") {
      return <ReposResults/>
    }
    if (view === "files") {
      return <RepoFilesList/>
    }
  }

  componentDidMount(){
    const { emptyResults } = this.props;
    emptyResults();
  }

  

  render() {
    const { value, loading } = this.props;
    return (
      <div>
        
        <div id="search-bar">
          <form onSubmit={this.handleSubmit}>
            <Input 
                fluid
                loading={loading}
                icon="search"
                placeholder='Chercher un repo'
                value={value}
                onChange={this.handleInputChange}
            />
          </form>
        </div>
          {        
              this.changeView()
            }
      </div>
    
    );
  }
}

// == Validation props
Search.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
}

Search.defaultProps = {
  value: '',
}

// == Export
export default Search;