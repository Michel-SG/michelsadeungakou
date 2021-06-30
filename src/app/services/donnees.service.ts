import { Injectable } from '@angular/core';
import { Projet } from 'src/app/interfaces/projet';
@Injectable({
  providedIn: 'root'
})
export class DonneesService {
  articles: Array<Projet> = [
    {
      id: 1,
      icon: "fab fa-angular fa-4x",
      outils: "Angular,Bootstrap, Express, Node.js, MySql, Postman",
      nomIcon: "ANGULAR",
      imageJombo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  
      titre: "Creation d'un site e-commerce",
      resume:"Créer un site de vente de livres en ligne pour Ib Groupe Cegos, spécialisé dans la vente de livres de formation. Son magasin est situé à Paris",
      premier: " Définir une architecture technique adaptée au besoin",
      deux: "Définir l’ergonomie et l’UX Design d’une application",
      trois: "Conseiller et valider la solution avec le client",
      quatre: "Concevoir des interfaces graphiques avec HTML5, CSS3",
      cinq: "Dynamiser des pages web avec Angular, typeScript et Bootstrap",
      six: "Concevoir des architectures d'applications avec UML",
      sept: "Organiser et gérer son code source pour favoriser le travail en équipe",
      huit: "Construire le site e-commerce de Ib-Groupe CEGOS avec Angular",
      neuf: "Développer des web services avec node.js",
      dix: "Maintenir et faire évoluer des applications",

    },
    {
      id: 2,
      icon: "fab fa-react fa-4x",
      outils: "React,Bootstrap, Express, Node.js, MySql, Postman",
      nomIcon: "REACT",
      titre: "Concevoir des interfaces utilisateurs",
      resume:"Rendre l'expérience utilisateur agréable sur votre site en présentant une ergonomie attractive de votre site et une navigation simple",
      premier: "Définir une architecture technique adaptée au besoin",
      deux: "Définir l’ergonomie et l’UX Design d’une application",
      trois: "Conseiller et valider la solution avec le client",
      quatre: "Concevoir des interfaces graphiques avec HTML5, CSS3",
      cinq: "Dynamiser des pages web avec React, typeScript et Bootstrap",
      six: "Concevoir des architectures d'applications avec UML",
      sept: "Organiser et gérer son code source pour favoriser le travail en équipe",
      huit: "Construire le site e-commerce avec React",
      neuf: "Développer des web services avec node.js",
      dix: "Maintenir et faire évoluer des applications",
    },
    {
      id: 3,
      icon: "fab fa-vuejs fa-4x",
      outils: "Vue.js, Bootstrap, Express, Node.js, MongoDB, Postman",
      nomIcon: "VUEJS",
      titre: "Creation d'un réseau social d'entreprise",
      resume:"Créer un réseau social permettant d'échanger avec les personnels afin de comprendre leurs satisfactions sur l'ambiance du travail",
      premier: "Définir une architecture technique adaptée au besoin",
      deux: "Définir l’ergonomie et l’UX Design d’une application",
      trois: "Conseiller et valider la solution avec le client",
      quatre: "Concevoir des interfaces graphiques avec HTML5, CSS3",
      cinq: "Dynamiser des pages web avec Vue.js et Bootstrap",
      six: "Concevoir des architectures d'applications avec UML",
      sept: "Organiser et gérer son code source pour favoriser le travail en équipe",
      huit: "Construire l'API sécurisée respectant le RGPD et les opérations de l'OWASP",
      neuf: "Développer des web services avec node.js",
      dix: "Utiliser la couche expressJs sur node.js",
    },
    {
      id: 4,
      icon: "",
      outils: "Python, R, Scikit-learn, Matplotlib, Pandas, seaborn",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      titre: "Etude et analyse de données au CNRS",
      resume:"Analyser les données au CNRS pour comprendre leurs évolutions et leur donner du sens",
      premier: "Analyse statistique de données avec python",
      deux: "Effectuer une statistique descriptive avec python",
      trois: "Apprentissage supervisé (corrélation entre les données) avec Python : Scikit-learn, R",
      quatre: "Apprentissage non supervisé avec Python : Scikit-learn, R",
      cinq: "Optimisation des modèles via GridSearchCV ",
      six: "Créer des métriques spécifiques ",
      sept: "Modèles statistiques et visualisation de l'information via Python (Scikit-learn, Matplotlib, Pandas, seaborn)",
    },
    {
      id: 5,
      icon: "fab fa-symfony fa-4x",
      outils: "PHP, Symfony, MySql, IPiPlatForm, Bootstrap",
      nomIcon: "PHP-SYMFONY",
      imageUrl: "",
      titre: "Construire l'application pinterest",
      resume:"Développer une application qui affiche les objets pinterests en vente, en se basant sur l'un des frameWorks php complet très utilisé, qui est Symfony",
      premier: "Définir une architecture technique adaptée au besoin",
      deux: "Définir l’ergonomie et l’UX Design d’une application",
      trois: "Concevoir des interfaces graphiques avec twig",
      quatre: "Dynamiser des pages web avec PHP et Bootstrap",
      cinq: "Concevoir des architectures d'applications avec UML",
      six: "Organiser et gérer son code source pour favoriser le travail en équipe",
      sept: "Construire le site complet affichant les pins",
      huit: "Développer des web services avec APiPlatForm",
    },
     {
      id: 6,
      icon: "",
      outils: "Google search console, GTmetrix, Google Analytics",
      nomIcon: "",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      imageSeo: "seo",
      titre: "Optimiser un site web existant",
      resume:"Référencement SEO du site la chouette agence pour favoriser l'accessibilité aux utilisateurs et aux robots Google",
      premier: "Le principe mobile friendly a été respecté lors de l’optimisation du site web",
      deux: "Respecter le niveau AA de WCAG 2.0",
      trois: "Développer un code qui respecte la norme W3C",
      quatre: "Faciliter le crawlabilité et l'indexabilité du site existant",
      cinq: "Rechercher les mots-clés pertinents à l'aide l'outil Keyword planner de Google Ads",
      six: "Rédiger un contenu texte riche et pertinent",
      sept: "Respecter l'hiérarchisation des balises html",
      huit: "Rendre le site responsive",
    }
  ]
 
  constructor() { }

  getAll(){
    return this.articles;
  }
  getOneById(id: number) {
    const element = this.articles.find(elt=>elt.id === id);
    return element; 
  }

}
