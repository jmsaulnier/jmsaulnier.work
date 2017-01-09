import React, { Component } from 'react';
import { Link } from 'preact-router';

import styles from './AboutView.css';

/**
 * AboutView component
 */
export default class AboutView extends Component {
  render () {
    return (
      <div className={styles.AboutView}>
        <h1>AboutView</h1>
        <nav>
          <Link href='/'>Home</Link>
        </nav>
      </div>
    );
  }
}