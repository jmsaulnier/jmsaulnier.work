import React, { Component } from 'react';
import { Router } from 'preact-router';
import PropTypes from 'proptypes';

import debounce from 'lodash.debounce';

import HomeView from 'src/sections/HomeView';
import AboutView from 'src/sections/AboutView';
import RouteTransition from 'src/components/RouteTransition';

import styles from './App.css';

// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url);

/**
 * App component
 */
class App extends Component {

  constructor(props) {
    super(props);

    window.addEventListener('resize',
      debounce(() => props.windowResize(window.innerWidth, window.innerHeight), 200)
    );

    props.windowResize(window.innerWidth, window.innerHeight);
  }

  /**
   * render
   */
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

App.propTypes = {
    windowResize: PropTypes.func // browser actions
};

export default App;