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
    return (
			<li className={styles.Reference}>
				<h5><a href={this.props.href} target="_blank">{this.props.name}</a> | {this.props.client}</h5>
				<h6>
					<span className={styles.tags}>
						{this.props.tags.map((tag) =>
							<span className={styles.tag}>{tag}</span>
						)}
					</span>
					<br />
					― {this.props.awards}
				</h6>
			</li>
    );
  }
}

Reference.propTypes = {
	name: PropTypes.string,
	client: PropTypes.string,
	tags: PropTypes.array,
	awards: PropTypes.string,
	href: PropTypes.string,
};

export default Reference;
