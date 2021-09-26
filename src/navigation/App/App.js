import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class App extends PureComponent {
	shouldComponentUpdate({ location, history }) {
		if (location.pathname === this.props.location.pathname) {
			return true;
		}
		return true;
	}

	componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0);
    }
	}
	
	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default withRouter(App);
