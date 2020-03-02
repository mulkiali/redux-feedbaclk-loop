import React, { Component } from 'react';
import {connect} from 'react-redux';

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
  
  export default connect()(Comments);