import React, { Component } from 'react';
import Page from './page';
import { Ipost, postsFetch,deletePostFetch } from '../../redux/action/Posts';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/store';
interface AppProps {
	posts: Ipost[];
	postsFetch(): Function;
	deletePostFetch(id: number): Function;
}
interface AppState {
	mounted: boolean;
}
class Dispaly extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			mounted: true,
		};
	}
	componentDidMount() {
		if (this.state.mounted === true) {
			this.props.postsFetch();
		}
	}
	
	componentWillUnmount() {
		this.setState({ mounted: false });
	}

	render() {
		if (this.props.posts.length === 0) {
			return <h1>loading...</h1>;
		}

		return <Page posts={this.props.posts} deletePostFetch={this.props.deletePostFetch}/>;
	}
}
const mapStateToProps = ({ posts }: StoreState): { posts: Ipost[] } => {
	return {
		posts: posts,
	};
};
const mapDispatchToProps = {
	postsFetch,
	deletePostFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Dispaly);
