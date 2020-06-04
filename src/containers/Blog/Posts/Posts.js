import React, { Component } from 'react';
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
        let posts = <p style={{textAlign:"center"}}>There is Something wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(i =>{
                return <Post
                         key={i.id}
                         title={i.title}
                         author={i.author} 
                         clicked={()=>this.postSelectHandler(i.id)}/>;
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