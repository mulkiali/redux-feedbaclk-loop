import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path='/' component={Feeling}/>
        <Route exact path='/understanding' component={Understanding}/>
        <Route exact path='/support' component={Support}/>
        <Route exact path='/comments' component={Comments}/>
        <Route exact path='/review' component={Review}/>
        <br/>
      </div>
     </Router>
    );
  }
}

export default App;
