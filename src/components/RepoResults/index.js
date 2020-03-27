// == Import: npm
import React from 'react';
import PropTypes from "prop-types";
import {Card } from 'semantic-ui-react';

// == Import: local
import DisplayCard from 'src/containers/DisplayCard';

// == Composant
const ReposResults = ( { results }) => {

  return (
    <div id="results">  
      <Card.Group>
        {results.map(result => 
          <DisplayCard
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
}

// == Export
export default ReposResults;
