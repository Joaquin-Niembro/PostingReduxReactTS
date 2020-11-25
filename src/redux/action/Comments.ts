import axios from 'axios';
import { Dispatch } from 'redux';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export interface Icomment {
	id?: number;
	comment: string;
	post: number;
}
const createComment = (comment: Icomment) => {
	return {
		type: CREATE_COMMENT,
		payload: comment,
	};
};
const createCommentFailure = (error: string) => {
	return {
		type: CREATE_COMMENT_FAILURE,
		payload: error,
	};
};
export interface IcreateCommentAction {
	type: string;
	payload: Icomment;
}
export const createCommentFetch = (comment: Icomment): Function => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.post(
				'http://localhost:5000/comments',
				comment
			);
			dispatch<IcreateCommentAction>(createComment(response.data));
		} catch (err) {
			dispatch(createCommentFailure(err));
		}
	};
};
