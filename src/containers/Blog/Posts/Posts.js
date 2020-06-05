import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{
    state = {
        posts: [],
        selectedPostId: null,
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
        this.setState({selectedPostId: id});
    }
    render(){
        console.log('Inside Posts',this.props);
        let posts = <p style={{textAlign:"center"}}>There is Something wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(i =>{
                return (
                    <Link to={'/'+i.id} key={i.id}>
                        <Post
                         title={i.title}
                         author={i.author} 
                         clicked={()=>this.postSelectHandler(i.id)}/>
                    </Link>
                    );
            });
        }
        return (
            <section className="Posts">
                  {posts}
            </section>
        );
    }
} 

export default Posts;