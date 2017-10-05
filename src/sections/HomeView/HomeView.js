import React, { Component } from 'react';

import Reference from 'src/components/Reference';

import styles from './HomeView.css';

/**
 * HomeView component
 */
export default class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
	}

  componentDidMount() {

  }

  /**
   * render
   */
  render() {
    return (
      <div className={styles.HomeView}>
        <h1><b>Jean-Michel Saulnier</b></h1>
				<h2>
					<b>Freelance creative developer,</b><br />
					<span>former creative technologist <a href="http://thinkingbox.com/" target="_blank">@Thinkingbox</a></span>
				</h2>
				<h3>
					For any project inquiry, feel free<br />
					to say hello at <a href="mailto:hi@jmsaulnier.works">hi@jmsaulnier.works</a>
				</h3>
				<div className={styles.social}>
					<span><a href="https://twitter.com/jmsaulnier" target="_blank">Twitter</a></span>
					<span className={styles.bullet}>•</span>
					<span><a href="https://www.linkedin.com/in/jmsaulnier/" target="_blank">Linkedin</a></span>
					<span className={styles.bullet}>•</span>
					<span><a href="https://github.com/jmsaulnier" target="_blank">Github</a></span>
				</div>
				<h4>References</h4>
				<ul className={styles.references}>
					<Reference
						name="Transformers"
						client="Paramount"
						tags={['Playcanvas', 'React', 'Bodymovin']}
						awards="CSS Design Awards (WOTD)"
						href="http://thinkingbox.com/bumblebee"
					/>
					<Reference
						name="Riverdale Comic book creator"
						client="CW TV"
						tags={['React', 'Facebook SDK']}
						awards="Awwwards (SOTD), CSS Design Awards (WOTD)"
						href="http://thinkingbox.com/riverdale"
					/>
					<Reference
						name="Sneaky Pete"
						client="Amazon Studios"
						tags={['Unity', 'Arduino', 'Watson API', 'React']}
						awards="FWA (SOTD), CSS Design Awards (WOTD)"
						href="http://thinkingbox.com/sneakpete"
					/>
					<Reference
						name="Snowden"
						client="Open Road"
						tags={['React', 'Facebook SDK']}
						awards="FWA (SOTD), CSS Design Awards (WOTD)"
						href="http://thinkingbox.com/snowden"
					/>
					<Reference
						name="The Hunger Games"
						client="Lionsgate"
						tags={['Kinect', 'Adobe AIR', 'React', 'Node.js']}
						awards="FWA (SOTD)"
						href="http://thinkingbox.com/mockingjay"
					/>
					<Reference
						name="Mission Impossible"
						client="Paramount"
						tags={['React']}
						awards="IAC Award (Best Movie Website), CSS Design Awards (WOTD)"
						href="http://thinkingbox.com/MI5"
					/>
					<Reference
						name=" Into The Storm"
						client="Warner Bros."
						tags={['Unity', 'Arduino', 'Oculus Rift', 'Node.js']}
						awards="ATOMIC Award winner (Best Tech breakthrough)"
						href="http://thinkingbox.com/into-the-storm"
					/>
					<Reference
						name="Magic Mirror"
						client="Porsche"
						tags={['OpenCV', 'Adobe AIR']}
						awards="Cream: Inspiring Innovation"
						href="http://thinkingbox.com/porsche"
					/>
					<Reference
						name="Jupiter Ascending"
						client="Warner Bros."
						tags={['Three.js', 'Socket.IO', 'Node.js']}
						awards="FWA (SOTD), IAC Award (Best Movie Interactive Application)"
						href="http://thinkingbox.com/caines-quest"
					/>
				</ul>
      </div>
    );
  }
}
