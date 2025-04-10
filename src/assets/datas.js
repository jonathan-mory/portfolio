import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faNodeJs,
  faGithub,
  faGitAlt,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';

import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

export const skillsList = [
  {
    title: 'Front-end',
    skills: [
      { logo: faHtml5, name: 'HTML' },
      { logo: faCss3Alt, name: 'CSS' },
      { logo: faJs, name: 'JavaScript' },
      { logo: faReact, name: 'React' },
      { logo: faSass, name: 'Sass' },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { logo: faNodeJs, name: 'Node.js' },
      { logo: faServer, name: 'Express.js' },
      { logo: faDatabase, name: 'MongoDB' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { logo: faGitAlt, name: 'Git' },
      { logo: faGithub, name: 'GitHub' },
      { logo: faFigma, name: 'Figma' },
    ],
  },
];

export const projectsList = [
  {
    title: "Booki, site d'agence immobilière",
    projectId: 'Booki',
    description:
      "Créer la page d'accueil d'une agence de voyage avec HTML et CSS.",
    hardSkills: ['HTML', 'CSS'],
    cover: '/assets/images/booki/screenshot_booki.webp',
    pictures: [
      '/assets/images/booki/screenshot_booki_1.webp',
      '/assets/images/booki/screenshot_booki_2.webp',
      '/assets/images/booki/screenshot_booki_3.webp',
      '/assets/images/booki/screenshot_booki_4.webp',
      '/assets/images/booki/screenshot_booki_5.webp',
    ],
    mission:
      "L'objectif de ce premier projet dans le cadre de ma formation \"Développeur Web\" chez OpenClassrooms était d'intégrer l'interface visuelle du site de Booki en utilisant uniquement HTML et CSS. Pour cela, je disposais d'une maquette desktop, tablet & mobile sur Figma ainsi que des spécifications et contraintes techniques à respecter. Comme ce fut mon premier projet de développement web, j'ai également pris en main VS Code en tant qu'IDE (Environnement de Développement Intégré), ainsi que Git et GitHub pour versionner le projet.",
    date: '10/2024 - 11/2024',
    skills: [
      'Implémenter une interface responsive avec HTML et CSS',
      'Intégrer du contenu conformément à une maquette avec HTML et CSS',
      'Etudier et découper une maquette',
      'Versionner son projet avec Git et Github',
      "Vérifier la qualité de son code à l'aide de validateur tels que le W3C",
      'Travailler en collaboration avec un UI Designer',
      'Installer un environnement de développement front-end',
    ],
    linkGitHub: 'https://github.com/jonathan-mory/OC-DeveloppeurWeb-Projet1',
    linkDeployedSite:
      'https://jonathan-mory.github.io/OC-DeveloppeurWeb-Projet1/',
  },
  {
    title: "Sophie Bluel, portfolio d'une architecte",
    projectId: 'Sophie-Bluel-portfolio-d-une-architecte',
    description: 'Créer une page web dynamique avec JavaScript',
    hardSkills: ['HTML', 'CSS', 'JavaScript'],
    cover: '/assets/images/screenshot_sophie-bluel.webp',
    pictures: [
      '/assets/images/booki/screenshot_booki_1.webp',
      '/assets/images/booki/screenshot_booki_2.webp',
      '/assets/images/booki/screenshot_booki_3.webp',
      '/assets/images/booki/screenshot_booki_4.webp',
      '/assets/images/booki/screenshot_booki_5.webp',
    ],
    mission:
      "L'objectif de ce projet était de travailler sur la conception d'un site portfolio d’une architecte d’intérieur en JavaScript avec un code back-end déjà existant et une première version statique du code front-end. J'ai intégré la récupération des images de la galerie de manière dynamique et l'ajout des filtres par catégories. J'ai également ajouté une page de connexion pour l'administrateur ainsi qu'une modale permettant d'ajouter et supprimer les médias du site. Une des difficultés auxquelles j'ai été confronté concernait la gestion des requêtes HTTP asynchrones avec fetch, une fonctionnalité avec laquelle je n'avais pas d'expérience. Cependant, grâce à une organisation méthodique et à une documentation approfondie, j'ai réussi à maîtriser cette composante essentielle du projet.",
    date: '11/2024 - 12/2024',
    skills: [
      'Récupérer les données utilisateurs dans le JavaScript via des formulaires',
      'Manipuler les éléments du DOM avec JavaScript',
      'Développer du front-end sur un back-end déjà existant',
      'Gérer les événements utilisateurs avec JavaScript',
      'Communiquer avec une API REST',
    ],
    linkGitHub: 'https://github.com/jonathan-mory/OC-DeveloppeurWeb-Projet2',
    linkDeployedSite: '',
  },
  {
    title: 'Nina Carducci, site de photographe',
    projectId: 'Nina-Carducci-site-de-photographe',
    description: 'Débugger et optimisez un site de photographe',
    hardSkills: ['SEO', 'Accessibilité', 'Débogage', 'Chrome DevTools'],
    cover: '/assets/images/screenshot_nina-carducci.webp',
    pictures: [
      '/assets/images/booki/screenshot_booki_1.webp',
      '/assets/images/booki/screenshot_booki_2.webp',
      '/assets/images/booki/screenshot_booki_3.webp',
      '/assets/images/booki/screenshot_booki_4.webp',
      '/assets/images/booki/screenshot_booki_5.webp',
    ],
    mission:
      "L'objectif était d'analyser et améliorer un site internet déjà existant. Mon rôle était d'optimiser les images du site pour réduire le temps de chargement de la page et optimiser le code et sa structure afin d'améliorer l'accessibilité et le référencement (SEO) du site. Pour ce faire, j'ai réalisé différentes actions telles que l'optimisation des images pour réduire leur poids sans perdre en qualité, ainsi que la restructuration du code pour le rendre plus efficace et conforme aux bonnes pratiques. En ce qui concerne le SEO, j'ai mis en place un référencement local avec Schema.org, et utiliser les balises meta des réseaux sociaux (ce qui permet de contrôler l'affichage de l'aperçu du site). Le code contenait également certains bugs à corriger.",
    date: '01/2025',
    skills: [
      'Optimiser les performances d’un site web',
      'Débugger un site web grâce aux Chrome DevTools',
      'Rédiger un cahier de recette pour tester un site',
      "Améliorer le référencement d'un site (SEO)",
      "Améliorer l'accessibilité d'un site",
      "Livrer un rapport d'intervention",
    ],
    linkGitHub: 'https://github.com/jonathan-mory/OC-DeveloppeurWeb-Projet3',
    linkDeployedSite:
      'https://jonathan-mory.github.io/OC-DeveloppeurWeb-Projet3/',
  },
  {
    title: 'Kasa, site de location immobilière',
    projectId: 'Kasa-site-de-location-immobiliere',
    description: 'Créer une application web de location immobilière avec React',
    hardSkills: ['React', 'Sass'],
    cover: '/assets/images/screenshot_kasa.webp',
    pictures: [
      '/assets/images/booki/screenshot_booki_1.webp',
      '/assets/images/booki/screenshot_booki_2.webp',
      '/assets/images/booki/screenshot_booki_3.webp',
      '/assets/images/booki/screenshot_booki_4.webp',
      '/assets/images/booki/screenshot_booki_5.webp',
    ],
    mission:
      "L'objectif était de développer l'ensemble d'une application, les composants React responsives et les routes React Router, le tout en suivant les maquettes Figma et des contraintes techniques. L'application a été initialisée avec Vite et les informations des logements ont été implémentées à partir d'un fichier JSON en attendant le développement du code back-end. Le style de l'application a été réalisé à l'aide du préprocesseur Sass qui étend la synthaxe de base du CSS avec des fonctionnalités avancées, ce qui rend la gestion et l'écriture des feuilles de style plus modulaires et efficaces.",
    date: '01/2025 - 02/2025',
    skills: [
      "Configurer la navigation entre les pages de l'application avec React Router",
      'Initialiser une application avec Vite',
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
      "Développer l'ensemble d'une application React responsive en suivant une maquette",
      'Mettre en œuvre des animations CSS',
      'Développer une interface web avec Sass',
    ],
    linkGitHub: 'https://github.com/jonathan-mory/OC-DeveloppeurWeb-Projet5',
    linkDeployedSite:
      'https://jonathan-mory.github.io/OC-DeveloppeurWeb-Projet5/',
  },
  {
    title: 'Mon vieux grimoire, site de notation de livres',
    projectId: 'Mon-vieux-grimoire-site-de-notation-de-livres',
    description: "Développer le back-end d'un site de notation de livres.",
    hardSkills: ['Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    cover: '/assets/images/screenshot_mon-vieux-grimoire.webp',
    pictures: [
      '/assets/images/booki/screenshot_booki_1.webp',
      '/assets/images/booki/screenshot_booki_2.webp',
      '/assets/images/booki/screenshot_booki_3.webp',
      '/assets/images/booki/screenshot_booki_4.webp',
      '/assets/images/booki/screenshot_booki_5.webp',
    ],
    mission:
      "L'objectif était de s'occuper de la partie back-end du site, en collaboration avec un développeur front-end et une designeuse. J'ai donc mis en place une API conforme aux spécifications techniques. Elle a été développé avec Node.js, le framework Express ainsi que MongoDB. Pour faciliter la maintenance, j'ai organisé le code en plusieurs sous-dossiers : les modèles, les controllers, les middlewares, les routes et les fonctions. J'ai mis en œuvre des opérations CRUD (Create, Read, Update, Delete), et géré la sécurité des sessions de connexion des utilisateurs grâce à JWT (JsonWebToken). En ce qui concerne l'implémentation d'un système de téléchargement de fichiers qui respecte les bonnes pratiques du Green code, j'ai utilisé les bibliothèques Multer et Sharp afin de redimensionner et modifier le format des images. Ce projet a été un vrai défi pour moi, car c'est la première fois que je développais un serveur en back-end et cela m'a permis de mieux comprendre le fonctionnement des API REST.",
    date: '02/2025 - 03/2025',
    skills: [
      'Créer un serveur avec Node.js et Express',
      'Implémenter un modèle logique de données conformément à la réglementation',
      'Mettre en œuvre des opérations CRUD de manière sécurisée',
      "Gérer des données d'une base de données MongoDB avec Node, Express et Mongoose",
      'Stocker des données de manière sécurisée',
      'Respecter des normes de Green Code',
      'Travailler en collaboration avec un développeur front-end',
    ],
    linkGitHub: 'https://github.com/jonathan-mory/OC-DeveloppeurWeb-Projet6',
    linkDeployedSite: '',
  },
];
