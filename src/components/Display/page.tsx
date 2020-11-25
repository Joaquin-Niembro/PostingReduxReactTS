import React from 'react';
import { Ipost } from '../../redux/action/Posts';
import { Icomment } from '../../redux/action/Comments';
interface AppProps {
	posts: Ipost[];
	deletePostFetch(id: number): Function;
	comment: Icomment;
	onChange(e: React.ChangeEvent<HTMLInputElement>, post: number): void;
	createCommentFetch(comment: Icomment): Function;
}
function page({
	posts,
	deletePostFetch,
	comment,
	onChange,
	createCommentFetch,
}: AppProps): JSX.Element {
	if (!posts) {
		return <h1>Loading...</h1>;
	}
	console.log(comment);
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
								width: '50%',
							}}
						>
							<h3>post: {post.content}</h3>
							<button onClick={() => deletePostFetch(post.id!)}>Delete</button>
							<div
								style={{
									padding: '.5rem',
									border: '5px solid blue',
									margin: '.5rem',
								}}
							>
								<input
									type='text'
									value={comment.comment}
									onChange={(e) => onChange(e, post.id!)}
								/>
								<button onClick={() => createCommentFetch(comment)}>
									Create
								</button>
								<h3>Comments</h3>
								{post.comments
									? post.comments.map((comment) => (
											<div key={comment.id} style={{ display: 'flex' }}>
												<p style={{ display: 'none' }}>
													{(comment.post = post.id)}
												</p>

												<button>delete</button>
												<p>comment: {comment.comment}</p>
											</div>
									  ))
									: null}
							</div>
						</div>
					)
			)}
		</>
	);
}

export default page;
