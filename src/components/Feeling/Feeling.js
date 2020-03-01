import React, { Component } from 'react';

class Feeling extends Component {
    handleClick = ()=> {
        this.props.history.push('/understanding')
    }

    render() {
      return (
        <div className="Feeling">
        <h1>How are you feeling today?</h1>
        <select id="feeling" name="feeling">
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
  
  export default Feeling;