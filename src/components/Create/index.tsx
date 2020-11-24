import React, { Component } from 'react';
import Page from './page';
import { createPostFetch } from '../../redux/action/Posts';
import { connect } from 'react-redux';
import { Ipost } from '../../redux/action/Posts';
interface AppProps {
	createPostFetch(post: Ipost): Function;
}
export interface AppState {
	post: Ipost;
}
class Create extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			post: {
				content: '',
				comments: [],
			},
		};
	}
	onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState((prevState) => ({
			post: {
				...prevState.post,
				content: e.target.value,
			},
		}));
	};
	render() {
		return <Page post={this.state.post} onChange={this.onChange} createPostFetch={this.props.createPostFetch}/>;
	}
}
const mapDispatchToProps = {
	createPostFetch,
};
export default connect(null, mapDispatchToProps)(Create);
