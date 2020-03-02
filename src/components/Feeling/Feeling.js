import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    state={
        feeling: 0,
    }
    handleClick = ()=> {
        this.props.dispatch({
            type: 'UPDATE_FEELINGS',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding')
    }

    handleChange = (event) =>{
        this.setState({
            feeling: Number(event.target.value)
        })
    }

    render() {
      return (
        <div className="Feeling">
        <h1>How are you feeling today?</h1>
        <select value={this.state.feeling} name="feeling" onChange={this.handleChange}>
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
  
  export default connect()(Feeling);