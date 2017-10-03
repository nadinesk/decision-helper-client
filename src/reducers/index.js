import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import decisionReducer from './decision_reducer';



const rootReducer =  combineReducers({    
  user: userReducer, 
  decisions: decisionReducer
  
});


export default rootReducer;