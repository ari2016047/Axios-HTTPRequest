import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        name: '',
        salary: '',
        age: '',
        submitted: false
    }
    postDataHandler = () => {
        let dat ={
            name: this.state.name,
            salary: this.state.salary,
            age: this.state.age
        };
        console.log('Posting ....');
        axios.post('http://dummy.restapiexample.com/api/v1/create',dat)
            .then(response=>{
                console.log(response);
                this.setState({submitted: true});
                // or
                // this.props.history.push('/posts');
                // advantage is we can go by back button
            })
            .catch(err =>{
                console.log(err);
            });
    }
    render () {
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to="/posts"/>
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Employee</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Salary</label>
                <input type="text" value={this.state.salary} onChange={(event) => this.setState({salary: event.target.value})} />
                <label>Age</label>
                <input type="text" value={this.state.age} onChange={(event) => this.setState({age: event.target.value})} />
                
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;