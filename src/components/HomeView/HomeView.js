import React, { Component } from 'react';
import { Link } from 'preact-router';

import styles from './HomeView.css';

/**
 * HomeView component
 */
export default class HomeView extends Component {
  render () {
    return (
      <div className={styles.HomeView}>
        <h1>HomeView</h1>
        <nav>
          <Link href='/about'>About</Link>
        </nav>
      </div>
    );
  }
}