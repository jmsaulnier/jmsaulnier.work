import React, { Component } from 'react';
import { Link } from 'preact-router';

import * as animate from 'src/core/animate';

import styles from './AboutView.css';

/**
 * AboutView component
 */
export default class AboutView extends Component {
  
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
    console.log('componentWillAppear::AboutView');
    this.animateIn(callback);
  }

  /**
   * componentWillEnter
   * @param callback
   */
  componentWillEnter(callback) {
    console.log('componentWillEnter::AboutView');
    this.animateIn(callback);
  }

  /**
   * componentWillLeave
   * @param callback
   */
  componentWillLeave(callback) {
    console.log('componentWillLeave::AboutView');
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
      console.log('animateIn::Aboutview - completed');
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
      console.log('animateOut::Aboutview - completed');
      callback();
    });
  }

  /**
   * render
   */
  render() {
    return (
      <div className={styles.AboutView}>
        <h1 ref={(el) => { this.$title = el; }} >AboutView</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </div>
    );
  }
}
