

export default function itemReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_ITEMS':    
      return action.items
      case 'POST_ITEM':    
      return {
      	itemSubmitSuccess: true
      }
    
    default: 
      return state;
  }
}




