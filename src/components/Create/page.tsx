import React from 'react';

import { Ipost } from '../../redux/action/Posts';
interface AppProps {
	post: Ipost;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
	createPostFetch(post: Ipost): Function;
}
function page({ post, onChange, createPostFetch }: AppProps) {
	return (
		<>
			<input
				type='text'
				name='content'
				value={post.content}
				onChange={onChange}
			/>
			<button onClick={() => createPostFetch(post)}>Create</button>
		</>
	);
}

export default page;
