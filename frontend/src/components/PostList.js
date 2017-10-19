import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import {
    Typography,
    List,
    ListItem,
	ListItemSecondaryAction,
    ListItemText,
    ListItemIcon,
    ListSubheader,
 	IconButton,
 	Button,
 	Hidden,
 	Avatar} from 'material-ui';
import { Comment, ArrowUpward, ArrowDownward, ChevronRight } from 'material-ui-icons';


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

                        <ListItem key={post.id}>

							<Avatar>{post.voteScore}</Avatar>


							<ListItemText primary={<Link to={'/' + post.id}>{post.title}</Link>} secondary={<Link to={'/' + post.id}>{post.author}</Link>} />


							<ListItemSecondaryAction>

								<IconButton dense>
        							<ArrowUpward />
      							</IconButton>

								<IconButton dense>
        							<ArrowDownward />
      							</IconButton>

              				</ListItemSecondaryAction>

                        </ListItem>

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
