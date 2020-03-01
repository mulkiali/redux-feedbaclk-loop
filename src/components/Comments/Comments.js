import React, { Component } from 'react';

class Comments extends Component {
    handleClick = ()=> {
        this.props.history.push('/review')
    }

    render() {
      return (
        <div className="Comments">
          <h1>Any comments you want to leave?</h1>
        <input placeholder="Comments"></input>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default Comments;