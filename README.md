# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tesbih App

## Description
Cette application React permet de suivre le **dhikr** (remémoration de Dieu) en islam. Elle propose une interface simple et intuitive pour compter et mémoriser les invocations du **tasbih**.

### Fonctionnalités principales :
- Ajout de compteurs pour **SoubhanAllah**, **Alhamdulilah**, **Allahu Akbar** et **La ilaha ilala**.
- Possibilité de réinitialiser tous les compteurs.
- Interface multilingue (français et arabe) avec éditeur de langue dynamique.
- Adaptation de la direction du texte (à droite ou à gauche) selon la langue sélectionnée.
- **Interface entièrement responsive**, adaptée aux écrans de bureau et mobiles.

## Guide pour Comprendre le Tasbih
Le tasbih est une pratique spirituelle importante en islam. Elle consiste à répéter des invocations courtes pour glorifier Dieu. Voici les invocations principales :

1. **SoubhanAllah** (« Gloire à Allah ») – 33 fois.
2. **Alhamdulilah** (« Louange à Allah ») – 33 fois.
3. **Allahu Akbar** (« Allah est le plus grand ») – 33 fois.
4. **La ilaha ilala** (« Il n’y a de divinité digne d’adoration qu’Allah ») – sans limite.

Cette pratique renforce la spiritualité et rapproche les musulmans de leur foi.

## Installation
1. Clonez le projet :
   ```bash
   git clone https://github.com/votre-repo/tesbih-app.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez l'application :
   ```bash
   npm start
   ```

## Capture d'écran
### Interface Desktop
<img width="953" alt="tesbih" src="https://github.com/user-attachments/assets/98581e35-f401-4183-808c-530ff069f8c0" />

### Interface Mobile (Responsive)
<img width="279" alt="tesbihMobile" src="https://github.com/user-attachments/assets/98f1820f-8a98-44cd-904d-1fed86d90b27" />

## Utilisation
1. **Comptage des invocations** : Cliquez sur les boutons pour chaque invocation (« SoubhanAllah », « Alhamdulilah », etc.).
2. **Réinitialisation** : Appuyez sur le bouton « Réinitialisation » pour remettre tous les compteurs à zéro.
3. **Changer de langue** : Utilisez le menu déroulant en haut à droite pour passer entre le français et l'arabe.

## Technologies Utilisées
- **React** : Pour la gestion de l’interface utilisateur.
- **i18next** : Pour la traduction et la gestion multilingue.
- **Tailwind CSS** : Pour le style et la mise en page.

## Structure du Code
Voici un aperçu des principales fonctions et composants :

- **Compteurs d'invocations** :
  ```javascript
  const Subhanalh = () => {
    setSubhanalah(subhanalah + 1);
  };
  const ALhamdulilah = () => {
    setALhamdulilah(alhamdulilah + 1);
  };
  ```

- **Changement de langue** :
  ```javascript
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  ```

- **Composant principal** :
  ```javascript
  <div className={`bg-gray-100 p-4 ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
    // Contenu ici
  </div>
  ```

## Contribution
Les contributions sont les bienvenues !

1. Forkez ce dépôt.
2. Créez une nouvelle branche :
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```
3. Faites vos modifications et committez-les :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez les modifications :
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```
5. Créez une pull request.



---

Ajoutez des images de votre application dans les sections correspondantes et personnalisez davantage si nécessaire ! 😊

