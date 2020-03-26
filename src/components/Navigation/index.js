// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

// == Import: local

// == Composant
const Navigation = ({handleClick}) => (
    <nav>
        <Menu>
            <Menu.Item
                name='home'
                // active={activeItem === 'home'}
                onClick={handleClick('home')}
           >
             Home
            </Menu.Item>
    
            <Menu.Item
                name='search'
                // active={activeItem === 'search'}
                onClick={handleClick('search')}
            >
                Search
            </Menu.Item>
    
            <Menu.Item
                name='About'
                // active={activeItem === 'About'}
                onClick={handleClick('about')}
            >
                About
            </Menu.Item>
        </Menu>
    </nav>

)

// == Validation props
Navigation.propTypes = {
    handleClick: PropTypes.func.isRequired
}

// == Export
export default Navigation;