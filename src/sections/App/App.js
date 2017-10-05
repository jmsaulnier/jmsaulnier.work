import React, { Component } from 'react';
import PropTypes from 'proptypes';

import Background from 'src/sections/Background';
import HomeView from 'src/sections/HomeView';

import styles from './App.css';

/**
 * App component
 */
class App extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * render
   */
  render() {
    return (
      <div className={styles.App}>
				<Background />
				<HomeView />
      </div>
    );
  }
}

export default App;
