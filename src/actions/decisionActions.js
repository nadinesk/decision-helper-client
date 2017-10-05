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

export function addDecision(user_id, decision) {      
  return function(dispatch) {    
    dispatch({type: 'POST_DECISION'})
    return fetch(`http://localhost:3200/api/v1/users/${user_id}/decisions`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ decision: decision})      
    })
      .then(res => res.json())
      .then(responseJson => {          
         dispatch({type: 'POST_SUCCESS', decision: responseJson.decision})
          
      })



  }
}

export function deleteDecision(user_id, decision) {      
  const decision_id = decision.id
  return function(dispatch) {        
     debugger
     return fetch(`http://localhost:3200/api/v1/users/${user_id}/decisions/${decision_id}`,  {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ decision: decision})  
      })         
      .then(res =>  res.json())
      .then(responseJson => {                              
         debugger
         dispatch(receivedDecisions(responseJson.decisions))        
    })   

  }
}



