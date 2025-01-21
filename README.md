# Portfolio de Lucas Mota 🌐

## Technologies Utilisées 🛠️

- **HTML**: Utilisé pour structurer le contenu des pages. 📄
- **CSS / SASS**: Employé pour styliser les éléments visuels du site. 🎨
- **JavaScript**: Utilisé pour ajouter des interactions dynamiques via GSAP. ⚙️
- **GSAP (GreenSock Animation Platform)**: Bibliothèque d'animation pour des animations complexes et performantes. 🎭

## Structure du Projet 🏗️

### HTML

- **Index.html**: Page principale du portfolio, incluant les sections principales telles que les projets, à propos, et contact. 🏠
- **Mentions-legales.html**: Page des mentions légales avec un style cohérent avec le reste du site. ⚖️

### CSS

#### `style.css`

- **Styles Globaux**:

  - Définition des couleurs, tailles de police, et autres variables CSS. 🎨
  - Styles pour les éléments de base comme le body, les headers, et les liens. 🔗
  
- **Classes Spécifiques**:

  - `.project`: Styles pour les cartes de projet, incluant les animations au survol. 📦
  - `.avatar`: Styles pour l'image de profil dans la section à propos. 🖼️
  - `.contact-item`: Styles pour les éléments de contact, avec des transitions douces. 📞

#### `layout.css`

- **.projects** et **.project**: Gère la disposition des projets avec des marges et des positions spécifiques. 📐
- **.container-techno**: Disposition des technologies utilisées dans les descriptions de projet. 💻

### JavaScript

#### `app.js`

- **Enregistrement des plugins GSAP**:

  - Utilisation de `ScrollTrigger` et `ScrollToPlugin` pour des animations basées sur le défilement et le déplacement vers des sections spécifiques. 🎢
  
- **Dynamique des Sections**:

  - Création dynamique des cartes de projet et de la timeline des expériences. 🛠️
  - Animations pour faire apparaître les éléments lors du défilement. 🌟

## Fonctionnalités Clés 🔑

- **Animations au Défilement**: Utilisation de GSAP pour animer les éléments comme les cartes de projet et les items de la timeline au fur et à mesure que l'utilisateur défile sur la page. 📜
- **Navigation Dynamique**: Animations pour le déplacement fluide entre les sections du site. 🚀
- **Responsive Design**: Adaptation du site à différentes tailles d'écran, avec des styles spécifiques pour les grands écrans. 📱
