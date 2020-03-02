import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const defaultState = {feeling: 0, understanding: 0, support: 0, comments: '',   }
const feedbackReducer = (state = defaultState, action)=>{
  if (action.payload === 'UPDATE_FEELING'){
    return {...state, feeling: action.payload};
  }else if(action.payload === 'UPDATE_UNDERSTANDING'){
    return {...state, understanding: action.payload};
  }else if(action.payload === 'UPDATE_SUPPORT'){
    return {...state, support: action.payload};
  }else if(action.payload === 'UPDATE_COMMENTS'){
    return {...state, comments: action.payload};
  }else if ("RESET_SURVEY"){
        return state
  }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
