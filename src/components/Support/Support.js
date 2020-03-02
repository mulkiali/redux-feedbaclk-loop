import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {
    handleClick = ()=> {
        this.props.history.push('/comments')
    }

    render() {
      return (
        <div className="Support">
           <h1>How well are you being supported?</h1>
        <input placeholder="support?"></input>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default connect()(Support);