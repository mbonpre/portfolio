# Portfolio · Précieux Namboni

Portfolio personnel de **Précieux Namboni**, développeur Full Stack et formateur en développement web, backend, mobile et intégration IA, basé à Parakou (Bénin).

Le site présente mes projets, mes formations, des avis de personnes avec qui j'ai travaillé, mon expertise et mes moyens de contact.

## Technologies

- **HTML, CSS et JavaScript** natifs, sans framework ni étape de compilation
- Thème clair et sombre, menu mobile, animations au défilement
- Polices Google Fonts (Bricolage Grotesque, Geist, Geist Mono)
- En-têtes de sécurité (CSP, HSTS, etc.) via le fichier `_headers`

## Structure du projet

```
portfolio/
├── index.html          Page unique du site
├── _headers            En-têtes de sécurité (Cloudflare Pages / Netlify)
├── css/
│   └── style.css       Tous les styles
├── js/
│   ├── boot.js         Marque la page comme « JavaScript actif »
│   ├── main.js         Thème, menu, apparition au défilement
│   ├── formations.js   Section formations
│   ├── contact.js      Liens de contact
│   ├── avis.js         Carrousel d'avis
│   └── photos.js       Chargement des photos de fond et de profil
└── assets/
    ├── img/            Captures d'écran des projets
    └── video/          Démonstrations vidéo
```

## Lancer le site en local

Il n'y a rien à installer. Dans le dossier du projet :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans le navigateur.
Avec VS Code, le bouton **Go Live** fait la même chose.

## Déploiement

Le site est statique : il suffit de publier le contenu du dépôt sur un hébergeur comme Cloudflare Pages ou Netlify. Le fichier `_headers` est lu automatiquement par ces deux plateformes.

## Projets présentés

- [CLUB-ANGLAIS](https://github.com/mbonpre/CLUB-ANGLAIS) : site web d'un club d'anglais
- [laravel-monblog](https://github.com/mbonpre/laravel-monblog) : blog développé avec Laravel
- [assistant-orientation-benin](https://github.com/mbonpre/assistant-orientation-benin) : assistant d'orientation scolaire
- [Projet-Python-L2](https://github.com/mbonpre/Projet-Python-L2) : projet Python de L2
- [tp-developpement-mobile-groupe-14](https://github.com/mbonpre/tp-developpement-mobile-groupe-14) : projet de développement mobile

## Contact

- GitHub : [mbonpre](https://github.com/mbonpre)
- LinkedIn : [Précieux Namboni](https://www.linkedin.com/in/precieux-namboni-ab66843b9)