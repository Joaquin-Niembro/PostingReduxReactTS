import React from 'react';
import { Ipost } from '../../redux/action/Posts';
interface AppProps {
	posts: Ipost[];
	deletePostFetch(id: number): Function;
}
function page({ posts, deletePostFetch }: AppProps): JSX.Element {
	if (!posts) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			{posts.map(
				(post) =>
					typeof post.id === 'number' && (
						<div
							key={post.id}
							style={{
								padding: '.5rem',
								margin: '1rem auto',
								border: '2px solid black',
							}}
						>
							<h3>post: {post.content}</h3>						
							<button onClick={() => deletePostFetch(post.id!)}>Delete</button>
							{post.comments.map((comment) => (
								<p key={comment.id}>comment: {comment.comment}</p>
							))}
						</div>
					)
			)}
		</>
	);
}

export default page;
