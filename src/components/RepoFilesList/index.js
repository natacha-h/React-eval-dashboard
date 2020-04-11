// == Import: npm

import React from 'react';
import PropTypes from "prop-types";
import {Table, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import: local
import './repoFiles.scss';

// == Composant
const RepoFilesList = ( {files, name, onBackClick, onFavClick, isFav} ) => (

    <div id="display-files">
        <Link to='/search'>
        <Button 
            content='Retour aux résultats' 
            onClick={onBackClick}
        />
        </Link>
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        {name}
                        <button id="fav-repo" onClick={onFavClick}>
                            <Icon name={ isFav === true ? 'star': 'star outline' } />
                        </button>
                        
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    files.map(({name, type}) => (
                        <Table.Row key={name}>
                            <Table.Cell collapsing>
                            <Icon name={ type === 'file'? 'file outline' : 'folder'} /> {name}
                            </Table.Cell>     
                        </Table.Row>     
                    ))
                }
            </Table.Body>
        </Table>
    </div>

)

// == Validation props
RepoFilesList.proptypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    name: PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired,
    onFavClick: PropTypes.func.isRequired,
    isFav: PropTypes.bool.isRequired,
}



// == Export
export default RepoFilesList;

