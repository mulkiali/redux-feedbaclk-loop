import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {
    state={
        support: 0,
    }
    handleClick = () => {
        this.props.dispatch({
            type: 'UPDATE_SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/comments')
    }

    handleChange = (event) =>{
        this.setState({
            support: Number(event.target.value)
        })
    }


    render() {
      return (
        <div className="Support">
           <h1>How well are you being supported?</h1>
        <input value={this.state.support} onChange={this.handleChange} placeholder="support?"></input>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default connect()(Support);