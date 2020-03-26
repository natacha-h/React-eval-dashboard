// == Import: npm

import React from 'react';
import PropTypes from "prop-types";
import {Table, Icon, Button } from 'semantic-ui-react';

// == Import: local

// == Composant
const RepoFilesList = ( {files, onBackClick} ) => (

    <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
            <Button 
                content='Retour aux résultats' 
                onClick={onBackClick}
            />
            Git Repository
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            files.map(({name, type}) => (
                <Table.Row>
                    <Table.Cell collapsing>
                    <Icon name={ type === 'file'? 'file outline' : 'folder'} /> {name}
                    </Table.Cell>     
                </Table.Row>     
            ))
        }
    </Table.Body>
  </Table>
)

// == Validation props
RepoFilesList.proptypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onBackClick: PropTypes.func.isRequired,
}



// == Export
export default RepoFilesList;

