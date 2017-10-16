import React, { Component } from 'react'
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
import { Route, Link } from 'react-router-dom'
import '../App.css';

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
        console.log(this.state.categories);
        const categories = this.state.categories;
        let categoriesTitle = categories.length > 0 ? 'Categories' : 'No categories found.';
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title">
                            Readable
                        </Typography>
                    </Toolbar>
                </AppBar>

            <Route exact path='/'>
                <List subheader={<ListSubheader>{categoriesTitle}</ListSubheader>}>
                    {categories.length > 0 && categories.map(cat => (
                        <Link to={"/" + cat.name}>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItem button>
                                <ListItemText inset primary={ cat.name } />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Route>


            {categories.length > 0 && categories.map(cat => (
                <Route key={cat.name} path={'/' + cat.path} render={({history}) =>
                        <div className="Hi">{ cat.name }</div>
                }
                />))
            }

            </div>
        );
    }
}

export default App;
