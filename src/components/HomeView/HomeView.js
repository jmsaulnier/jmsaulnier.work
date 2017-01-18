import React, { Component } from 'react';
import { Link } from 'preact-router';

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
  
  componentWillAppear(callback) {
    console.log('componentWillAppear::HomeView');
    this.animateIn(callback);
  }

  componentWillEnter(callback) {
    console.log('componentWillEnter::HomeView');
    this.animateIn(callback);
  }

  componentWillLeave(callback) {
    console.log('componentWillLeave::HomeView');
    this.animateOut(callback);
  }

  animateIn(callback) {
    TweenLite.set(this.$title, { opacity: 0 });

    TweenLite.to(this.$title, 1, { opacity: 1 }).then(() => {
      console.log('animateIn::HomeView - complete');
      callback();
    })
  }

  animateOut(callback) {
    TweenLite.to(this.$title, 5, { opacity: 0 }).then(() => {
      console.log('animateOut::HomeView - complete');
      callback();
    })
  }

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
