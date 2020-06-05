import React, { Component } from 'react';
// Link will prevent reloading page and will render page components where ever required
//NavLink will allow css of class
import { Route, NavLink , Switch} from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
   
    render () {
        console.log('Inside Blog',this.props);
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" render={() => <h1>Test</h1>}/> */}
                {/* Switch helps to load a single route which matches first */}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/" component={Posts}/>
                    {/* To redirect a user automatically instead of above  <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;