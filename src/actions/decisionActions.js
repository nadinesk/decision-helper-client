import fetch from 'isomorphic-fetch';

const receivedDecisions = decisions => {
  
  return {
    type: 'RECEIVED_DECISIONS',
    decisions
  }
}

export function fetchDecisions(user_id) {

  return function(dispatch){    
    //dispatch({type: 'FETCH_BOOKS'})
    return fetch(`http://localhost:3200/api/v1/users/${user_id}/decisions`)      
      .then(res =>  res.json())
      .then(decisions => {                     
        dispatch(receivedDecisions(decisions.decisions))        
        console.log('decisions', decisions.decisions)
    })
   
  }
}




