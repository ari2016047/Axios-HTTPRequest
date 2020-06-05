import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{
    state = {
        posts: [],
        error: false
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(request =>{
                const post = request.data.slice(0,4);
                const updatedPost = post.map(post =>{
                    return {
                        ...post,
                        author:'Arihant'
                    }
                })
                console.log(updatedPost);
                this.setState({posts:updatedPost});
            })
            .catch(err =>{
                this.setState({error: err});
            });
    }    

    postSelectHandler = (id) =>{
        // if not using link we can use push function to push stack of pages
        // this function is triggered by onClick()
        // this.props.history.push({pathname: '/'+id});
        // this.props.history.push('/posts'+id);

    }
    render(){
        console.log('Inside Posts',this.props);
        let posts = <p style={{textAlign:"center"}}>There is Something wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(i =>{
                return (
                    <Link to={'/posts/'+i.id} key={i.id}>
                        <Post
                         title={i.title}
                         author={i.author} 
                        //  clicked={()=>this.postSelectHandler(i.id)}
                        />
                    </Link>
                    );
            });
        }
        return (
            <div>
            <section className="Posts">
                  {posts}
            </section>
            <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
            </div>
        );
    }
} 

export default Posts;