

export default function itemReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_ITEMS':    
      return action.items
    
    default: 
      return state;
  }
}




