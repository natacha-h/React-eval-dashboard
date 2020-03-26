// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

// == Import: local

// == Composant
const Search = ( {value, loading, onInputChange, onSearchSubmit } ) => {

    const handleSubmit = evt => {
      evt.preventDefault();
      console.log('Submit pour la valeur', value);
      onSearchSubmit();
    }
  
    const handleInputChange = evt => {
      onInputChange(evt.target.value);
    }
  
    return (
      <div id="search-bar">
        <form onSubmit={handleSubmit}>
           
        <Input 
            fluid
            loading={loading}
            icon="search"
            placeholder='Chercher un repo'
            value={value}
            onChange={handleInputChange}
        />
        </form>
        
      </div>
    );
  }

// == Validation props


// == Export
export default Search;