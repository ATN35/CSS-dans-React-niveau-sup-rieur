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
