

export default function decisionReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_DECISIONS':    
      return action.decisions
    
    default: 
      return state;
  }
}




