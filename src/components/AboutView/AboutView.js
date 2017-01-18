import React, { Component } from 'react';
import { Link } from 'preact-router';

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
  
  componentWillAppear(callback) {
    console.log('componentWillAppear::AboutView');
    this.animateIn(callback);
  }

  componentWillEnter(callback) {
    console.log('componentWillEnter::AboutView');
    this.animateIn(callback);
  }

  componentWillLeave(callback) {
    console.log('componentWillLeave::AboutView');
    this.animateOut(callback);
  }

  animateIn(callback) {
    TweenLite.set(this.$title, { opacity: 0 });

    TweenLite.to(this.$title, 1, { opacity: 1 }).then(() => {
      console.log('animateIn::AboutView - complete');
      callback();
    })
  }

  animateOut(callback) {
    TweenLite.to(this.$title, 5, { opacity: 0 }).then(() => {
      console.log('animateOut::AboutView - complete');
      callback();
    })
  }

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
