# Mise en pratique React

## Dashboard Github

### Au programme

* Travail avec l'API Github
* Gestion de state avec Redux
* Gestion de routes avec react-router

## Pages à créer

* Welcome
* Search
* A propos

### En détails =>

#### Welcome :

Deux affichages, au choix selon le cas :
* **utilisateur non connecté** : affichage d'un formulaire de connexion (à l'aide d'un token Github)
* **utilisateur connecté** : affichage du profil utilisateur, avec ses derniers repos, ses repos favoris et un bouton de déconnexion

#### Search :

* recherche de repos (barre de recherche)
* possibilité de cliquer sur un repo pour afficher son contenu
* possiblité de mettre en repo en favori

### Consignes spécifiques :

* L'interface dispose d'une indication de loading lors des requêtes
* Chaque page de repo doit afficher son titre, et la liste de ses dossiers / fichiers
* Chaque page de repo permet de le mettre / retirer en favori
* La connexion doit se faire grâce à un token github

