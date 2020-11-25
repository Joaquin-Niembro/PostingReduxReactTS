import React, { Component } from 'react';
import Page from './page';
import { Ipost, postsFetch, deletePostFetch } from '../../redux/action/Posts';
import { Icomment, createCommentFetch } from '../../redux/action/Comments';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/store';
interface AppProps {
	posts: Ipost[];
	postsFetch(): Function;
	deletePostFetch(id: number): Function;
	createCommentFetch(comment: Icomment): Function;
}
interface AppState {
	mounted: boolean;
	comment: Icomment;
}
class Dispaly extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			mounted: true,
			comment: {
				comment: '',
				post: 0,
			},
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
	onChange = (e: React.ChangeEvent<HTMLInputElement>, post: number): void => {
		this.setState((prevState) => ({
			comment: {
				...prevState.comment,
				comment: e.target.value,
				post: post,
			},
		}));
	};
	render() {
		if (this.props.posts.length === 0) {
			return <h1>loading...</h1>;
		}

		return (
			<Page
				posts={this.props.posts}
				deletePostFetch={this.props.deletePostFetch}
				comment={this.state.comment}
				onChange={this.onChange}
				createCommentFetch={this.props.createCommentFetch}
			/>
		);
	}
}
const mapStateToProps = ({ posts }: StoreState): { posts: Ipost[] } => {
	return {
		posts: posts,
	};
};
const mapDispatchToProps = {
	postsFetch,
	deletePostFetch,
	createCommentFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dispaly);
