

export default function itemReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_ITEMS':    
      return action.items.items
    case 'POST_SUCCESS':    
     debugger
     var newArray = {...state,items:[...state, action.item]}
     return newArray.items
    
    default: 
      return state;
  }
}



