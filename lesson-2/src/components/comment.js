import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comment:"" }
        console.log('constructor')
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(' getSnapshotBeforeUpdate')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    componentDidMount(){
        console.log(' componentDidMount')
    }
    typeChange = (e) =>{
        this.setState({comment:e.target.value})
    }
    render() { 
        console.log("render")
        return ( 
        <div>
            <p>{this.state.comment}</p>
            <input onChange={this.typeChange}/>
        </div> );
    }
}
 
export default Comment;

