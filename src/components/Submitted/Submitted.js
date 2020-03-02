import React, { Component } from 'react';
import {connect} from 'react-redux';


class Review extends Component {
  handleClick = () => {
    this.props.dispatch({type: 'RESET_SURVEY'});
        this.props.history.push('/feeling');
    }
  
 
    render() {
      return (
        <div className="Review">
          <h1>Feedback Successfully Submitted!</h1>
         <button onClick={this.handleClick}>Survey</button>
        </div>
      );
    }
  }
  
  export default connect()(Review);