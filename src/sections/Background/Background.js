import React, { Component } from 'react';

import App from './3d';

import styles from './Background.css';

/**
 * Background component
 */
export default class Background extends Component {

  constructor(props) {
    super(props);
		this.state = {};

		this.$canvas = null;
	}

  componentDidMount() {
		const app = new App(256, this.$canvas)
		app.start()
  }
  /**
   * render
   */
  render() {
    return (
      <canvas ref={(el) => { this.$canvas = el; }} className={styles.Background} />
    );
  }
}
