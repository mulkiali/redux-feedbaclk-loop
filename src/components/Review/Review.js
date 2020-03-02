import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class Review extends Component {
    FeedbackSubmit = () =>{
        Axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackReducer,  
        }).then((response)=>{
            // this.props.dispatch(action)
           this.props.history.push('/submitted')
        }).catch((error)=>{
            console.log('error submitting', error);
        })
    }

    handleSubmit = () => {

    }

    render() {
        const feedback = this.props.reduxState.feedbackReducer;
      return (
        <div className="Review">
            {/* {JSON.stringify(this.props.reduxState.feedbackReducer)} */}
   
            <h1>Feedback Summary</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Undesrtanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
           

        </div>
      );
    }
  }
  const putReduxStateOnProps = (reduxState) => ({
        reduxState
     })
  export default connect(putReduxStateOnProps)(Review);