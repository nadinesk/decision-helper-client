

export default function decisionReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_DECISIONS':    
      return action.decisions
    case 'POST_SUCCESS':         
     var newArray = {...state,decisions:[...state, action.decision]}
     return newArray.decisions
    
    default: 
      return state;
  }
}




