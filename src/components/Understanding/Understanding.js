import React, { Component } from 'react';

class Understanding extends Component {
    handleClick = ()=> {
        this.props.history.push('/support')
    }

    render() {
      return (
        <div className="Understanding">
        <h1>How well are you understanding the content?</h1>
        <input placeholder="understanding?"></input>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default Understanding;