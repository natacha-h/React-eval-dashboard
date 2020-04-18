// == Import: npm
import React from 'react';
import PropTypes from "prop-types";
import { Card, Image } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

// == Import: local

// == Composant
const DisplayCard = ( { name, image, author, description, onRepoClick }) => {

  
    return ( 
       <Card>
         <Image src={image}></Image>
         <Card.Header onClick={onRepoClick}><Link to={`/repo/${name}`}>{name}</Link></Card.Header>
         <Card.Meta>{author}</Card.Meta>
         <Card.Description>{description}</Card.Description>
       </Card>

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