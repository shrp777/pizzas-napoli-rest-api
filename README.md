# Pizzas Napoli 🍕 REST API

*****************************************************
------------> Projet modèle à compléter <------------
*****************************************************

__API REST__ proposant des fonctionnalités basiques de type CRUD, développée avec __Hono__, __Bun__ et __TypeScript__.

- Adresse locale de l'API : <http://localhost:3000>

- Consulter les tests d'intégration réalisés avec __Bruno__ ([Bruno](https://www.usebruno.com/)), cf. collection de requêtes HTTP à importer `./Bruno`

## Installation

- à la racine du projet, création d'un fichier `.env` basé sur le fichier `.env.example`

- Installation des dépendances NPM :

$ `bun install`

- Démarrage de l'API :

$ `bun run dev`

## Initialisation de la Base de Données SQLite

Exécuter ces 2 commandes dans l'ordre :

- 1 : Création des tables dans la base de données SQLite :

$ `bun run db:createSchema`

- 2 : Remplissage des tables dans la base de données SQLite :

$ `bun run db:seedData`

![Pizza](./assets/pizza.png)

--

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
