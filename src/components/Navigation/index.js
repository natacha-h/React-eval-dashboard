// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

// == Import: local
import './navigation.scss';

// == Composant
const Navigation = () => (
    <nav>
        <Menu>
            <NavLink to='/'>
                <Menu.Item
                    // name='home'
                    // // active={activeItem === 'home'}
                    // onClick={handleClick('home')}
                >
                Home
                </Menu.Item>       
            </NavLink>
    
            <NavLink to='/search'>
                <Menu.Item>Search</Menu.Item>
            </NavLink>

            <NavLink to='/about'>
                <Menu.Item>About</Menu.Item>
            </NavLink>
        </Menu>
    </nav>

)

// == Validation props
// Navigation.propTypes = {
//     handleClick: PropTypes.func.isRequired
// }

// == Export
export default Navigation;