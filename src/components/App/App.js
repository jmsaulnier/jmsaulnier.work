import React, { Component } from 'react';
import { Router } from 'preact-router';

import HomeView from '../HomeView';
import AboutView from '../AboutView';
import RouteTransition from '../RouteTransition';

import styles from './App.css';

// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url);

/**
 * App component
 */
export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router onChange={onChange}>
          <RouteTransition path="/" component={HomeView} />
          <RouteTransition path="/about/" component={AboutView} />
        </Router>
      </div>
    );
  }
}
