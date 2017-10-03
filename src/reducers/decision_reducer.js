

export default function decisionReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_DECISIONS':    
      return action.decisions
    case 'POST_DECISION':    
      return {
      	submitSuccess: true
      }
    
    default: 
      return state;
  }
}




