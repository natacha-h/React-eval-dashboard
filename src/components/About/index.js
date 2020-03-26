// == Import: npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

// == Import: local
import './about.scss';

// == Composant
const About = () => (
    <div id="about">
        <section id="about-image">
            <Image src='src/components/About/assets/octocat.png' size='medium' circular />
        </section>
        <section id="about-text">
            <h2>À propos...</h2>
            <p> Ce site est un exercice d'évaluation proposé par l'école O'Clock aux étudiants de la spé React.</p>
            <p> L'idée est de faire une interface permettant de rechercher des repos GitHub, d'afficher leur contenu et de pouvoir les mettre en favoris</p>
            <p> Je fais cette spécialisation en autonomie, puisque pendant ma formation j'ai préféré suivre la spé Symfony. Je suis donc capable de travailler aussi bien côté Front que côté back</p>
        </section>
    </div>
)

// == Validation props


// == Export
export default About;