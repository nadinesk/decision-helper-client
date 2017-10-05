

export default function itemReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_ITEMS':    
      return action.items
    case 'POST_ITEM_SUCCESS':    
     
     var newArray = {...state,items:[...state, action.item]}
     return newArray.items
   
    default: 
      return state;
  }
}



