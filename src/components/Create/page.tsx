import React from 'react';

import { Ipost } from '../../redux/action/Posts';
interface AppProps {
	post: Ipost;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
	createPostFetch(post: Ipost): Function;
}
function page({ post, onChange, createPostFetch }: AppProps) {
	return (
		<div style={{margin: '1rem auto'}}>
			<h2>Create a post</h2>
			<input
				type='text'
				name='content'
				value={post.content}
				onChange={onChange}
			/>
			<button onClick={() => createPostFetch(post)}>Create</button>
		</div>
	);
}

export default page;
