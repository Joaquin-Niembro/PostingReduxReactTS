import axios from 'axios';
import { Dispatch } from 'redux';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export interface Ipost {
	id?: number;
	content: string;
	comments: any[];
}
const getPosts = () => {
	return {
		type: GET_POSTS,
	};
};
const getPostsSuccess = (posts: Ipost[]) => {
	return {
		type: GET_POSTS_SUCCESS,
		payload: posts,
	};
};
const getPostsFailure = (error: string) => {
	return {
		type: GET_POSTS_FAILURE,
		payload: error,
	};
};

export interface IfetchPostsAction {
	type: string;
	payload: Ipost[];
}
export const postsFetch = (): Function => {
	return async (dispatch: Dispatch) => {
		dispatch(getPosts());
		try {
			const response = await axios.get<Ipost[]>('http://localhost:5000/posts');
			dispatch<IfetchPostsAction>(getPostsSuccess(response.data));
		} catch (err) {
			dispatch(getPostsFailure(err));
		}
	};
};

export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'
const createPost = (post: Ipost) => {
	return {
		type: CREATE_POST,
		payload: post,
	};
};
const createPostFailure = (error: string) => {
	return {
		type: CREATE_POST_FAILURE,
		payload: error,
	};
};
export interface IcreatePostAction {
	type: string;
	payload: Ipost;
}
export const createPostFetch = (post: Ipost): Function => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.post('http://localhost:5000/posts', post);
			dispatch<IcreatePostAction>(createPost(response.data));
		} catch (err) {
			dispatch(createPostFailure(err));
		}
	};
};

export const DELETE_POST = 'DELETE_POST'
const deletePost = (id: number) => {
	return {
		type: DELETE_POST,
		payload: id,
	};
};
export interface IdeletePostAction {
	type: string;
	payload: number;
}
export const deletePostFetch = (id: number): Function => {
	return async (dispatch: Dispatch) => {
		try {
			await axios.delete(`http://localhost:5000/posts/${id}`);
			dispatch<IdeletePostAction>(deletePost(id));
		} catch (err) {
			console.log(err);
		}
	};
};
