import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { AppBar,
    Toolbar,
    IconButton,
    MenuIcon,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListSubheader } from 'material-ui';
import { Route, Link } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import '../App.css';
require('typeface-roboto');

class App extends Component {

    state = {
        categories: []
    }

    componentDidMount(){
    	fetch('http://localhost:3001/categories', { headers: {Authorization: 'shbdkjn'}})
        .then(response => response.json())
        .then(response => {
            this.setState({categories: response.categories});
        });
	}

    render() {

        let categories = this.state.categories;
        let categoriesTitle = categories.length > 0 ? 'Categories' : 'No categories found.';

        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Readable
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Route exact path='/' render={({history}) =>
                    <List subheader={<ListSubheader>{categoriesTitle}</ListSubheader>}>
                        {categories.length > 0 && categories.map(cat => (
                            <Link to={'/' + cat.name}>
                                <ListItem button key={cat.name}>
                                    <ListItemText primary={cat.name} />
                                </ListItem>
                            </Link>

                        ))}
                    </List>
                } />


                {categories.length > 0 && categories.map(cat => (
                    <Route exact key={cat.name} path={'/' + cat.path} render={history =>
                        <PostList category={cat} />
                    }
                    />))
                }

                <Route path="/post/:postId" render={props =>
                    <PostDetail id={props.postId} />
                } />

            </div>
        );
    }
}

export default App;
