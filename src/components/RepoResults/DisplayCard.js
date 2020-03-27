// == Import: npm
import React from 'react';
import PropTypes from "prop-types";
import {Card} from 'semantic-ui-react';

// == Import: local

// == Composant
const DisplayCard = ( { name, image, author, description, onRepoClick }) => {
  
    return (  
      <Card
        onClick={onRepoClick}
        image={image}
        header={name}
        meta={author}
        description={description}
      />    
    );
  }

// == Validation props
DisplayCard.proptypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
    onRepoClick: PropTypes.func.isRequired,
  
  }

  // Comme la prop 'description' peut être nulle, je lui fournis une valeur par défaut =>
DisplayCard.defaultProps = {
    description: '',
  }

// == Export
export default DisplayCard;