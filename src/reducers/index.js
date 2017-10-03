import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import decisionReducer from './decision_reducer';
import itemReducer from './item_reducer';



const rootReducer =  combineReducers({    
  user: userReducer, 
  decisions: decisionReducer, 
  items: itemReducer
  
});


export default rootReducer;