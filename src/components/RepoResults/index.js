// == Import: npm
import React from 'react';
import PropTypes from "prop-types";
import {Card, Button, ButtonGroup } from 'semantic-ui-react';

// == Import: local
import DisplayCard from './DisplayCard';

// == Composant
const ReposResults = ( {results, onRepoClick}) => {

  return (
    <div id="results">  
      <Card.Group>
        {results.map(result => 
          <DisplayCard
            onRepoClick={onRepoClick}
            key={result.id}         
            {...result}
          />           
        )}
      </Card.Group>
    </div>
  );
}

// == Validation props
ReposResults.proptypes = {
  results: PropTypes.array.isRequired,
  onRepoClick: PropTypes.func.isRequired,
}

// == Export
export default ReposResults;
