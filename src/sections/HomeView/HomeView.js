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
				<h2>Freelance Creative Developer</h2>
				<h3>
					Focused on innovation: in terms of usage, methods, interfaces and technologies.
					<br />
					I am passionate about programming and the challenges of implementing rich user interfaces and solid interaction models.
				</h3>
				<h4>
					For any project inquiry, feel free<br />
					to say hello at <a href="mailto:jmsaulnier.dev@gmail.com">jmsaulnier.dev@gmail.com</a>
				</h4>
				<div className={styles.social}>
					<span><a href="https://twitter.com/jmsaulnier" target="_blank">Twitter</a></span>
					<span className={styles.bullet}>•</span>
					<span><a href="https://www.linkedin.com/in/jmsaulnier/" target="_blank">Linkedin</a></span>
					<span className={styles.bullet}>•</span>
					<span><a href="https://github.com/jmsaulnier" target="_blank">Github</a></span>
				</div>
				<ul className={styles.references}>
					<Reference
						name="Transformers"
						client="Paramount"
						tags={['Playcanvas', 'React', 'Bodymovin']}
						awards="CSS Design Awards (WOTD)"
						href="https://thinkingbox.com/projects/calling-all-autobots"
					/>
					<Reference
						name="Riverdale Comic book creator"
						client="CW TV"
						tags={['React', 'Facebook SDK']}
						awards="Awwwards (SOTD), CSS Design Awards (WOTD)"
						href="https://thinkingbox.com/projects/riverdale"
					/>
					<Reference
						name="Sneaky Pete"
						client="Amazon Studios"
						tags={['Unity', 'Arduino', 'Watson API', 'React']}
						awards="FWA (SOTD), CSS Design Awards (WOTD)"
						href="https://thinkingbox.com/projects/sneakypete"
					/>
					<Reference
						name="Snowden"
						client="Open Road"
						tags={['React', 'Facebook SDK']}
						awards="FWA (SOTD), CSS Design Awards (WOTD)"
						href="https://thefwa.com/article/insights-snowden-are-you-being-watched"
					/>
					<Reference
						name="The Hunger Games"
						client="Lionsgate"
						tags={['Kinect', 'Adobe AIR', 'React', 'Node.js']}
						awards="FWA (SOTD)"
						href="https://thinkingbox.com/projects/mockingjay"
					/>
					<Reference
						name="Mission Impossible"
						client="Paramount"
						tags={['React']}
						awards="IAC Award (Best Movie Website), CSS Design Awards (WOTD)"
						href="https://www.cssdesignawards.com/sites/mission-impossible-rogue-nation/27023/"
					/>
					<Reference
						name=" Into The Storm"
						client="Warner Bros."
						tags={['Unity', 'Arduino', 'Oculus Rift', 'Node.js']}
						awards="ATOMIC Award winner (Best Tech breakthrough)"
						href="https://thinkingbox.com/projects/into-the-storm"
					/>
					<Reference
						name="Magic Mirror"
						client="Porsche"
						tags={['OpenCV', 'Adobe AIR']}
						awards="Cream: Inspiring Innovation"
						href="https://thinkingbox.com/projects/porsche-magic-mirror"
					/>
					<Reference
						name="Jupiter Ascending"
						client="Warner Bros."
						tags={['Three.js', 'Socket.IO', 'Node.js']}
						awards="FWA (SOTD), IAC Award (Best Movie Interactive Application)"
						href="https://thinkingbox.com/projects/jupiter-ascending"
					/>
				</ul>
      </div>
    );
  }
}
