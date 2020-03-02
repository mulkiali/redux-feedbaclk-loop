import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    state={
        comments: '',
    }

    
    handleClick = () => {
        this.props.dispatch({
            type: 'UPDATE_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
      return (
        <div className="Comments">
          <h1>Any comments you want to leave?</h1>
        <textarea value={this.state.comments} onChange={this.handleChange} placeholder="Comments?"></textarea>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default connect()(Comments);