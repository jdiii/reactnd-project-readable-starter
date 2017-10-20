import React, { Component } from 'react';
import {
	Card,
 	CardHeader,
	CardContent,
	Typography } from 'material-ui';
import {
	Link
} from 'react-router-dom'

import { formatTimestamp } from '../utils';

class PostDetail extends Component{

	state = {
		post: {
			"id": "8xf0y6ziyjabvozdd253nd",
			"timestamp": 1467166872634,
			"title": "Udacity is the best place to learn React",
			"body": "Everyone says so after all.",
			"author": "thingtwo",
			"category": "react",
			"voteScore": 6,
			"deleted": false
		},
		comments: [
			{}
		]
	}

	render(){
		console.log(this.props.id);
		let post = this.state.post;
		return (
			<Card raised={false} className="post-detail">
				{!post && (
					<CardHeader title="display2">Post not found.</CardHeader>
				)}

				{post && (
					<div>

						<CardContent>
							<Typography type="caption">
								Posted in <Link to={'/' + post.category}>{post.category}</Link>
							</Typography>
						</CardContent>

						<CardHeader title={post.title} subheader={formatTimestamp(post.timestamp) + '. Posted by ' + post.author}/>

						<CardContent>
							<Typography type="body1" component="p">
								{post.body}
							</Typography>
						</CardContent>
						
					</div>

				)}

			</Card>
		)
	}

}


export default PostDetail;
