import fetch from 'isomorphic-fetch';

const receivedItems = items => {
  
  return {
    type: 'RECEIVED_ITEMS',
    items
  }
}

export function fetchItems(user_id, decision_id) {
  
  return function(dispatch){    
    //dispatch({type: 'FETCH_BOOKS'})
    return fetch(`http://localhost:3200/api/v1/users/${user_id}/decisions/${decision_id}/items`)      
      .then(res =>  res.json())
      .then(items => {                     
        dispatch(receivedItems(items))        
        console.log('items.items', items.items)
        console.log('items', items)
    })
   
  }
}




