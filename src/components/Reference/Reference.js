import React, { Component } from 'react';
import PropTypes from 'proptypes';

import styles from './Reference.css';

/**
 * Reference component
 */
class Reference extends Component {

  constructor(props) {
    super(props);
    this.state = {};
	}

  componentDidMount() {

	}

  render(props) {
		const { href, client, awards, name, tags, description } = this.props;

    return (
			<li className={styles.Reference}>
				<h5><a href={href} target="_blank"><b>— {name}</b></a> © <span>{client}</span></h5>
				<h6>
					<span className={styles.tags}>
						{tags.map((tag) =>
							<span className={styles.tag}>{tag}</span>
						)}
					</span>
					<br />
					♡ {awards}
				</h6>
			</li>
    );
  }
}

Reference.propTypes = {
	name: PropTypes.string,
	client: PropTypes.string,
	tags: PropTypes.array,
	description: PropTypes.string,
	awards: PropTypes.string,
	href: PropTypes.string,
};

export default Reference;
