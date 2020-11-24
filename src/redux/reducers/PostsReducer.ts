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
type ActionType = IfetchPostsAction | IcreatePostAction | IdeletePostAction;

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
		default:
			return state;
	}
};
