import { Link } from 'react-router-dom';
import React from 'react';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home222</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
