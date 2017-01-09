import React, { Component } from 'react';
import { Router } from 'preact-router';

import HomeView from '../HomeView';
import AboutView from '../AboutView';

import styles from './App.css';

/**
 * App component
 */
export default class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Router>
					<HomeView path='/' />
          <AboutView path='/about/' />
				</Router>
      </div>
    );
  }
}