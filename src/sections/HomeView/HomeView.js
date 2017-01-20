import React, { Component } from 'react';
import { Link } from 'preact-router';

import * as animate from 'src/core/animate';

import styles from './HomeView.css';

/**
 * HomeView component
 */
export default class HomeView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};

    this.$title = null;
  }
  
  /**
   * componentWillAppear
   * @param callback
   */
  componentWillAppear(callback) {
    console.log('componentWillAppear::HomeView');
    this.animateIn(callback);
  }

  /**
   * componentWillEnter
   * @param callback
   */
  componentWillEnter(callback) {
    console.log('componentWillEnter::HomeView');
    this.animateIn(callback);
  }

  /**
   * componentWillLeave
   * @param callback
   */
  componentWillLeave(callback) {
    console.log('componentWillLeave::HomeView');
    this.animateOut(callback);
  }

  /**
   * animateIn
   * @param callback
   */
  animateIn(callback) {
    animate.set(this.$title, { opacity: 0 });

    Promise.all([
      animate.to(this.$title, 1, { opacity: 1 })
    ]).then(() => {
      console.log('animateIn::Homeview - completed');
      callback();
    });
  }

  /**
   * animateOut
   * @param callback
   */
  animateOut(callback) {
    Promise.all([
      animate.to(this.$title, 2, { opacity: 0 })
    ]).then(() => {
      console.log('animateOut::Homeview - completed');
      callback();
    });
  }

  /**
   * render
   */
  render() {
    return (
      <div className={styles.HomeView}>
        <h1 ref={(el) => { this.$title = el; }} >HomeView</h1>
        <nav>
          <Link href="/about">About</Link>
        </nav>
      </div>
    );
  }
}
