import {
	GET_POSTS,
	GET_POSTS_FAILURE,
	GET_POSTS_SUCCESS,
	IfetchPostsAction,
	Ipost,
	IcreatePostAction,
	CREATE_POST,
	CREATE_POST_FAILURE,
	DELETE_POST,
	IdeletePostAction,
} from '../action/Posts';
import {
	CREATE_COMMENT,
	CREATE_COMMENT_FAILURE,
	IcreateCommentAction,
} from '../action/Comments';
type ActionType =
	| IfetchPostsAction
	| IcreatePostAction
	| IdeletePostAction
	| IcreateCommentAction;

export const postsReducer = (
	state: Ipost[] = [],
	{ type, payload }: ActionType
) => {
	switch (type) {
		case GET_POSTS:
			return [];
		case GET_POSTS_SUCCESS:
			return payload;
		case GET_POSTS_FAILURE:
			return payload;
		case CREATE_POST:
			return [...state, payload];
		case CREATE_POST_FAILURE:
			return payload;
		case DELETE_POST:
			return state.filter((post: Ipost) => post.id !== payload);
		case CREATE_COMMENT:
			return state
		case CREATE_COMMENT_FAILURE:
			return payload;
		default:
			return state;
	}
};
