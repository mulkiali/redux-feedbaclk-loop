import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {
    state={
        understanding: 0,
    }
    handleClick = ()=> {
        this.props.dispatch({
            type: 'UPDATE_UDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/support')
    }

    handleChange = (event) =>{
        this.setState({
            understanding: Number(event.target.value)
        })
       
    }

    render() {
      return (
        <div className="Understanding">
        <h1>How well are you understanding the content?</h1>
        <select value={this.state.understanding} name="understanding" onChange={this.handleChange}>
            <option value="0"> -- </option>
            <option value="1"> 1 - Low</option>
            <option value="2"> 2 - Not Great</option>
            <option value="3"> 3 - Fine</option>
            <option value="4"> 4 - Good</option>
            <option value="5"> 5 - Fantastic</option>
        </select>
        <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
  
  export default connect()(Understanding);