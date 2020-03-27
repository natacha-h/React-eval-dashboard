// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'semantic-ui-react';

// == Import: local

// == Composant
class Search extends React.Component {

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmitSearch } = this.props;
    // console.log('Submit pour la valeur', value);
    onSubmitSearch();
  }
  
  handleInputChange = evt => {
    const { value } = evt.target;
    const { onInputChange } = this.props;
    onInputChange(value);
  }

  render() {
    const { value, loading } = this.props;
    return (
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
    
    );
  }
}
// const Search = () => {

  
//   }

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