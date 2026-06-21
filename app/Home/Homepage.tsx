
import React from 'react';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Home Page</h1>
          <span className={styles.badge}>Dashboard</span>
        </div>

        <p className={styles.subtitle}>Welcome to the Home Page. Random content with CSS styling.</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>Random content for layout.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>Random content for layout.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>Random content for layout.</p>
          </div>
        </div>

        <div className={styles.footer}>
          <span>© {new Date().getFullYear()} Your App</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

