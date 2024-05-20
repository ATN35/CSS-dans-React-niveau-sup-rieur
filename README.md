# React CSS Styling Example

## Description

Ce projet est un exemple d'application React démontrant l'utilisation de deux techniques de stylisation : les modules CSS et les préprocesseurs SCSS. Le projet montre comment créer des composants réutilisables et stylisés, tels qu'un composant de carte, avec ces deux méthodes.

## Objectifs

- Comprendre ce qu'est un préprocesseur CSS et comment l'utiliser.
- Découvrir les CSS Modules et leur utilisation dans un projet React.
- Construire des composants React stylisés de manière évolutive et maintenable.

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```sh
    git clone https://github.com/votre-utilisateur/react-css-styling-example.git
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd react-css-styling-example
    ```

3. Installez les dépendances :
    ```sh
    npm install
    ```

4. Démarrez l'application :
    ```sh
    npm start
    ```

## Utilisation

L'application se compose d'un menu de navigation et de plusieurs cartes stylisées. Les styles sont définis à l'aide de CSS Modules et de SCSS. Les principaux fichiers de l'application sont :

- `App.jsx` : le composant principal de l'application.
- `App.module.css` : les styles globaux de l'application utilisant les CSS Modules.
- `Card.jsx` : le composant de carte réutilisable.
- `Card.module.css` : les styles du composant de carte utilisant les CSS Modules.
- `style.scss` : un exemple de fichier SCSS démontrant l'utilisation de variables et d'imbrications.

## Détails des Fichiers

### App.jsx

Ce fichier contient le composant principal de l'application. Il rend un menu de navigation et une série de composants de carte.

```jsx
import React from "react";
import styles from "./App.module.css";
import Card from "./Card";

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </nav>
      <header className={styles.header}>
        <h1 className={styles.title}>CSS Modules & SCSS Example!</h1>
        <p className={styles.description}>This is an example using CSS Modules and SCSS!</p>
      </header>
      <main className={styles.main}>
        <Card title="Card Title 1" content="This is the content of the first card." />
        <Card title="Card Title 2" content="This is the content of the second card." />
        <Card title="Card Title 3" content="This is the content of the third card." />
      </main>
    </div>
  );
}

export default App;
