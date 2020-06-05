import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost: null
    }

// componentDidUpdate() is invoked immediately after updating occurs.(newprops, setstate, force update)
// This method is not called for the initial render.
    componentDidMount(){
        console.log('Inside Full Post', this.props);
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.props.match.params.id !== this.state.loadedPost.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(response =>{
                        this.setState({loadedPost: response.data});
            });
            }
        
        }
    }
    deletePostHandler = () =>{
        console.log('Inside delete handlder');
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(result =>{
                console.log(result);
            });
    } 

    render () {
        console.log('inside Render up');
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign:"center"}}>Loading...</p>;
        }
        //we render the DOM immediately after we get id
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;