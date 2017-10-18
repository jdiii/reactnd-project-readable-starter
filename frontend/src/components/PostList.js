import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListSubheader } from 'material-ui';

class PostList extends Component{

	state = {
		posts: [
		    {
		        "id": "8xf0y6ziyjabvozdd253nd",
		        "timestamp": 1467166872634,
		        "title": "Udacity is the best place to learn React",
		        "body": "Everyone says so after all.",
		        "author": "thingtwo",
		        "category": "react",
		        "voteScore": 6,
		        "deleted": false
		    },
			{
		        "id": "8xf0y6ziyjabvozdd253nda",
		        "timestamp": 1467166872634,
		        "title": "Udacity is a bad place to learn Angular",
		        "body": "Everyone says so after all.",
		        "author": "thingone",
		        "category": "react",
		        "voteScore": 6,
		        "deleted": false
		    }
		]
	}

	render(){

		let cat = this.props.category;
		let posts = this.state.posts;

		return (

            <List subheader={<ListSubheader>{cat.name}</ListSubheader>}>
                {posts.length > 0 && posts.map(post => (
                    <Link key={post.id} to={'/' + cat.name + '/' + post.id }>
                        <ListItem button>
                            <ListItemText primary={post.title} secondary={post.author} />
                        </ListItem>
                    </Link>
                ))}

				{posts.length === 0 && (
					<ListItem button>
						<ListItemText primary={'No posts found'} />
					</ListItem>
				)}
            </List>

		)

	}

}

export default PostList;
