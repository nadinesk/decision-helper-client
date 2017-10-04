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
    })   
  }
}

export function addItem(user_id, decision_id, item) {      
  return function(dispatch) {        
    return fetch(`http://localhost:3200/api/v1/users/${user_id}/decisions/${decision_id}/items`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: item})      
    })
      .then(res => res.json())
      .then(responseJson => {          
        console.log('responseJson', responseJson.item) 
        dispatch({type: 'POST_ITEM_SUCCESS', item: responseJson.item})
        
          
      })



  }
}

